import axios from "axios";

const BACKEND_URL = "https://formbot-api-nwz1.onrender.com";

const handleError = (error) => {
  if (error.response) {
    return error.response.data.message || "An unexpected error occurred";
  } else if (error.request) {
    return "Network error. Please check your internet connection.";
  } else {
    return "An unexpected error occurred";
  }
};

const withRetry = async (fn, retries = 3, delay = 1000) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }
      console.error(`Retrying... (${attempt}/${retries})`, error);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

const Register = async (name, email, password, confirmPassword) => {
  return withRetry(async () => {
    const response = await axios.post(`${BACKEND_URL}/register`, {
      name,
      email,
      password,
      confirmPassword,
    });
    return response.data;
  });
};

const Login = async (email, password) => {
  return withRetry(async () => {
    const response = await axios.post(`${BACKEND_URL}/login`, {
      email,
      password,
    });
    return response.data;
  });
};

const updateUserDetails = async (
  userid,
  oldPassword,
  newName,
  newEmail,
  newPassword
) => {
  return withRetry(async () => {
    const response = await axios.put(`${BACKEND_URL}/update/${userid}`, {
      oldPassword,
      newName,
      newEmail,
      newPassword,
    });
    return response.data;
  });
};

export { Login, Register, updateUserDetails };
