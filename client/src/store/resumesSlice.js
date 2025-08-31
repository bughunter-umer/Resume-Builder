import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:4000/api/resumes";

// ✅ Fetch all resumes
export const fetchResumes = createAsyncThunk("resumes/fetchResumes", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// ✅ Generate a new resume via backend
export const generateResume = createAsyncThunk(
  "resumes/generateResume",
  async (payload) => {
    const res = await axios.post(`${API_URL}/generate`, payload);
    return res.data.resume;
  }
);

// ✅ Main slice
const resumesSlice = createSlice({
  name: "resumes",
  initialState: { list: [], status: "idle", error: null },
  reducers: {
    // Local-only addResume (not API-connected)
    addResume: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch resumes
      .addCase(fetchResumes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchResumes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchResumes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Generate resume
      .addCase(generateResume.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      });
  },
});

// ✅ Export actions & reducer
export const { addResume } = resumesSlice.actions;
export default resumesSlice.reducer;
