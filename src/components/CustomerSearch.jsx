import React, { useContext, useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";
import CustomerList from "./CustomerList";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function CustomerSearch() {
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const { token, setToken, isAuthenticated } = useContext(AuthContext);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/customers`, {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((res) => {
        setCustomers(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen px-10 py-10 bg-[#f1faee]">
      <SearchFilter />
      <CustomerList customers={customers} />
    </div>
  );
}

export default CustomerSearch;
