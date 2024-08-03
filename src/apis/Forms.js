import axios from "axios";
const BACKEND_URL = "http://ec2-13-60-104-236.eu-north-1.compute.amazonaws.com";

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
