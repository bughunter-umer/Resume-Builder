import axios from "axios";

const API_URL = "http://localhost:4000/api/resumes";

// ✅ Function to download resume PDF
export const downloadResumePDF = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}/download`, {
      responseType: "blob", // PDF comes as binary
    });
    return response.data; // return PDF blob
  } catch (error) {
    console.error("Error downloading resume PDF:", error);
    throw error;
  }
};
