import axios from "axios";
import { Configuration } from "../Configuration";

// Sign In (User or Pharmacist)
export const signIn = async (payload, userType) => {
  try {
    const apiEndpoint =
      userType === "pharmacy"
        ? `${Configuration.BASE_URL}${Configuration.ADMIN_LOGIN}`
        : `${Configuration.BASE_URL}${Configuration.USER_LOGIN}`;
    const response = await axios.post(apiEndpoint, payload);

    return response.data; // Expecting { id, name, email, user_type, token, ... }
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    throw error;
  }
};

// User Sign Up
export const signUpUser = async (payload) => {
  try {
    const response = await axios.post(
      `${Configuration.BASE_URL}${Configuration.USER_REGISTER}`,
      payload
    );
    return response.data; // User registration response
  } catch (error) {
    console.error("Error during user sign-up:", error.message);
    throw error;
  }
};

// Pharmacist Sign Up (inside Pharmacist Dashboard only)
export const signUpPharmacist = async (payload) => {
  try {
    const response = await axios.post(
      `${Configuration.BASE_URL}${Configuration.ADMIN_REGISTER}`,
      payload
    );
    return response.data; // Pharmacist registration response
  } catch (error) {
    console.error("Error during pharmacist sign-up:", error.message);
    throw error;
  }
};

// Log Out
export const LogOut = async () => {
  try {
    console.log("Logged out successfully");
    return { isSuccess: true };
  } catch (error) {
    console.error("Error during logout:", error.message);
    return { isSuccess: false, error };
  }
};
