import axios from "axios";

const API_URL = "http://localhost:4000/api/resumes";

// ✅ Save resume to DB
export const createResume = async (resumeData) => {
  const response = await axios.post(API_URL, resumeData);
  return response.data;
};
