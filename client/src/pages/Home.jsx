import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchResumes } from "../store/resumesSlice"
import ResumeForm from "../../components/ResumeForm"
import ResumePreview from "../../components/ResumePreview"

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchResumes())
  }, [dispatch])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ResumeForm />
      <ResumePreview />
    </div>
  )
}
