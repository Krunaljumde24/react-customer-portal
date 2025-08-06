import React, { useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";
import CustomerView from "./CustomerView";
import CustomerList from "./CustomerList";
import axios from "axios";

function CustomerSearch() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const [customers, setCustomers] = useState([]);

  const token = sessionStorage.getItem("token");
  useEffect(() => {
    axios
      .get(apiBaseUrl + "/api/customer", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        setCustomers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   const [customers, setCustomers] = useState([
  //     {
  //       id: "1",
  //       name: "Sarah Johnson",
  //       customerId: "CUST-001",
  //       email: "sarah.johnson@email.com",
  //       tags: ["Premium", "Frequent Buyer"],
  //     },
  //     {
  //       id: "2",
  //       name: "Michael Lee",
  //       customerId: "CUST-002",
  //       email: "michael.lee@email.com",
  //       tags: ["Standard", "New"],
  //     },
  //     // More customers ...
  //   ]);

  return (
    <div className="min-h-screen px-10 py-10 bg-[#f1faee]">
      <SearchFilter />
      {/* Rest of your customers table/list here */}
      <CustomerList customers={customers} />
    </div>
  );
}

export default CustomerSearch;
