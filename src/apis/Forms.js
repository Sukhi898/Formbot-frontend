import axios from "axios";
const BACKEND_URL = "https://formbot-api-nwz1.onrender.com";

const SaveFormdetails = async ({ formName, formData, userid }) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/forms`, {
      formName,
      formData,
      userid,
    });
    console.log("Form saved successfully:", response.data);
    return response.data.link;
  } catch (error) {
    console.error("Error saving form:", error);
    throw error;
  }
};

export { SaveFormdetails };
