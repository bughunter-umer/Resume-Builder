import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import DownloadButton from "./components/downloadButton";

function App() {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AI Powered Resume Builder</h1>

      {/* Form to collect user data */}
      <ResumeForm setResumeData={setResumeData} />

      {/* Show Preview only when data exists */}
      {resumeData && (
        <>
          <ResumePreview resumeData={resumeData} />
          <DownloadButton resumeData={resumeData} />
        </>
      )}
    </div>
  );
}

export default App;
