import { configureStore } from "@reduxjs/toolkit"
import resumesReducer from "./resumesSlice"

const store = configureStore({
  reducer: {
    resumes: resumesReducer,
  },
})

export default store
