import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export const useAuth = () => {
  const { token, setToken, isAuthenticated } = useContext(AuthContext);

  const login = async (loginRequest) => {
    try {
      const resposne = await axios.post(
        `${API_URL}/api/auth/login`,
        loginRequest,
        { headers: "Content-Type: application/json" },
      );
      const { token, subject } = resposne.data;
      setToken(token);
      return {
        success: true,
        user: subject,
        message: "Login successful.",
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Failed to login.",
      };
    }
  };

  const validateSession = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/validate`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // console.log(response);
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Failed to validate session.",
      };
    }
  };

  return {
    validateSession,
    login,
  };
};
