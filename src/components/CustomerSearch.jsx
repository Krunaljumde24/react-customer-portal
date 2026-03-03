import React, { useContext, useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";
import CustomerList from "./CustomerList";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function CustomerSearch() {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const { token, setToken, isAuthenticated } = useContext(AuthContext);

  // const [token, setToken] = useState(null);

  const [customers, setCustomers] = useState([]);

  // useEffect(() => {
  // const authDetails = sessionStorage.getItem("authDetails");
  // if (authDetails) {
  // let obj = JSON.parse(authDetails);
  // setToken(obj.token);
  // }
  // });

  useEffect(() => {
    axios
      .get(`${API_URL}/api/customers`, {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        // console.log(JSON.stringify(res.data));
        // let data = JSON.parse(res.data);
        // console.log(data);
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
