// src/pages/AddCustomer.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

// Reusable Input Component
const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}) => (
  <div className="flex flex-col">
    {label && (
      <label className="text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && "*"}
      </label>
    )}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-400 p-2 rounded focus:ring focus:ring-blue-300 outline-none"
    />
  </div>
);

// Reusable Fieldset Wrapper
const Section = ({ title, children }) => (
  <fieldset className="border p-4 rounded space-y-4">
    <legend className="font-semibold">{title}</legend>
    {children}
  </fieldset>
);

export default function AddCustomer({ onAdd }) {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const { validateSession } = useAuth();

  const emptyForm = {
    firstName: "",
    middleName: "",
    lastName: "",
    avatar_initials: "",
    type: "",
    contact_information: {
      email: "",
      phone: "",
      address: "",
    },
    account_details: {
      account_status: "Standard",
      shopping_interests: [],
      languages: [],
      communication_preferences: [],
    },
  };
  const [form, setForm] = useState(emptyForm);

  const [error, setError] = useState("");

  // Helpers
  const updateRoot = (key, value) => setForm({ ...form, [key]: value });
  const updateNested = (section, key, value) =>
    setForm({ ...form, [section]: { ...form[section], [key]: value } });
  const updateDeepNested = (section, subsection, key, value) =>
    setForm({
      ...form,
      [section]: {
        ...form[section],
        [subsection]: { ...form[section][subsection], [key]: value },
      },
    });
  const updateArrayField = (section, key, value) => {
    const arr = value
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
    setForm({ ...form, [section]: { ...form[section], [key]: arr } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.contact_information.email) {
      setError("Please fill required fields: First Name, Last Name and Email");
      return;
    }
    setError("");
    if (onAdd) onAdd({ customer: form });
    navigate("/dashboard");
  };

  useEffect(() => {
    const authDetails = sessionStorage.getItem("authDetails");
    if (authDetails) {
      let obj = JSON.parse(authDetails);
      setToken(obj.token);
    }
  });

  const handleTestSubmit = () => {
    setForm({
      firstName: "Test",
      middleName: "Test",
      lastName: "Test",
      avatar_initials: "TT",
      type: "Standard",
      contact_information: {
        email: "test@test.com",
        phone: "12345678990",
        address: "Test nagar, Test",
      },
      account_details: {
        account_status: "Standard",
        shopping_interests: ["test1", "test2", "test3"],
        languages: ["English", "Hindi", "Marathi"],
        communication_preferences: ["SMS", "EMAIL"],
      },
    });

    setTimeout(() => {
      let fullName =
        form.firstName.trim() +
        " " +
        form.middleName.trim() +
        " " +
        form.lastName.trim();

      let init = form.firstName.substring(0, 1) + form.lastName.substring(0, 1);

      let requestBody = {
        name: fullName,
        initials: init,
        email: form.contact_information.email,
        phone: form.contact_information.phone,
        address: form.contact_information.address,
        type: form.type,
      };

      axios
        .post(apiBaseUrl + "/api/customer", requestBody, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.status === 201) {
            toast.success("Customer Added!");
            setForm(emptyForm);
          }
        })
        .catch((err) => {
          // console.log(err);
          let status = err.response.status;
          if (status && status === 403) {
            validateSession();
          }
        });
    }, 2000);
  };

  return (
    <div className="bg-amber-50 p-6">
      <div className="max-w-7xl mx-auto rounded-lg shadow p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">Add New Customer</h1>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            <InputField
              label="Fisrt Name"
              name="firstName"
              value={form.firstName}
              onChange={(e) => updateRoot("firstName", e.target.value)}
              required
            />
            <InputField
              label="Middle Name"
              name="middleName"
              value={form.middleName}
              onChange={(e) => updateRoot("middleName", e.target.value)}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={(e) => updateRoot("lastName", e.target.value)}
              required
            />
          </div>

          {/* Type  */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Type
              </label>
              <select
                className="border p-2 rounded w-full"
                value={form.type}
                onChange={(e) => updateRoot("type", e.target.value)}
              >
                <option selected>Standard</option>
                <option>Internal</option>
                <option>Partners</option>
                <option>Premium/High-Value</option>
                <option>At-Risk/Low-Value</option>
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <Section title="Contact Information">
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Email"
                value={form.contact_information.email}
                onChange={(e) =>
                  updateNested("contact_information", "email", e.target.value)
                }
                required
              />
              <InputField
                label="Phone"
                value={form.contact_information.phone}
                onChange={(e) =>
                  updateNested("contact_information", "phone", e.target.value)
                }
              />
              <InputField
                label="Address"
                value={form.contact_information.address}
                onChange={(e) =>
                  updateNested("contact_information", "address", e.target.value)
                }
              />
            </div>
          </Section>

          {/* Account Details & Social Preference*/}
          <Section title="Account Details & Social Preference">
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Languages (comma separated)"
                value={form.account_details.languages}
                // onChange={(e) =>
                //   updateNested("account_details", "language", e.target.value)
                // }
              />
              <InputField
                label="Communication Preferences (comma separated)"
                value={form.account_details.communication_preferences.join(
                  ", "
                )}
                onChange={(e) =>
                  updateArrayField(
                    "contact_information",
                    "communication_preferences",
                    e.target.value
                  )
                }
              />
              <InputField
                label="Shopping Interests (comma separated)"
                value={form.account_details.shopping_interests.join(", ")}
                onChange={(e) =>
                  updateArrayField(
                    "preferences_and_social",
                    "shopping_interests",
                    e.target.value
                  )
                }
              />
            </div>
          </Section>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Save Customer
            </button>
            <button
              type="button"
              className="px-6 bg-red-300 py-2 border rounded hover:bg-red-500"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-amber-300 px-6 py-2 rounded hover:bg-amber-500"
              onClick={handleTestSubmit}
            >
              Test Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
