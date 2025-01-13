import { signIn, signUpUser, signUpPharmacist } from "../../../services/AuthService";

// Login User or Pharmacist
const login = async (payload) => {
  try{
  const user = await signIn(payload);
  console.log("User data from API:", user);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}catch (error) {
  console.error("Error during sign-in:", error.response ? error.response.data : error.message);
  throw error;  // Ensure the error propagates correctly
}
};

// Register User
const registerUser = async (payload) => {
  const user = await signUpUser(payload);

  // Save user details to localStorage
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

// Register Pharmacist (only from the Pharmacist Dashboard)
const registerPharmacist = async (payload) => {
  const pharmacist = await signUpPharmacist(payload);

  // Optionally store pharmacist data locally if needed
  return pharmacist;
};

// Logout
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  registerUser,
  registerPharmacist,
  logout,
};

export default authService;
