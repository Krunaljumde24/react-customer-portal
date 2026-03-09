import React, { useContext, useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";
import CustomerList from "./CustomerList";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { GridLoader } from "react-spinners";

function CustomerSearch() {
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const { token } = useContext(AuthContext);
  const [customers, setCustomers] = useState([]);

  const [page, setPage] = useState(5);
  const [size, setSize] = useState(8);
  const [totalPages, setTotalPages] = useState(10);

  const [filters, setFilters] = useState({
    name: "",
    email: "",
    mobile: "",
    status: "",
    startDate: "",
    endDate: "",
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/customers/getAllCustomers`, {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setCustomers(res.data);
        }, 1000);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen px-10 py-10 bg-[#f1faee]">
      <SearchFilter />
      {loading ? (
        <div className="flex justify-center items-center h-56">
          <GridLoader size={15} color="blue" />
        </div>
      ) : (
        <>
          <CustomerList customers={customers} />
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 border-2 border-blue-700 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages).keys()].map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-1 border rounded-md ${
                  p === page
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {p + 1}
              </button>
            ))}
            <button
              disabled={page === totalPages - 1}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 border-2 border-blue-700 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CustomerSearch;
