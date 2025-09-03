import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import DownloadButton from "./components/DownloadButton";

export default function App() {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        AI Powered Resume Builder
      </h1>

      <ResumeForm setResumeData={setResumeData} />
      <ResumePreview resumeData={resumeData} />
      <DownloadButton resumeData={resumeData} />
    </div>
  );
}
