export default function ResumePreview({ resumeData }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
      <h2>{resumeData.name}</h2>
      <p><strong>Email:</strong> {resumeData.email}</p>
      <p><strong>Phone:</strong> {resumeData.phone}</p>
      <p><strong>Education:</strong> {resumeData.education}</p>
      <p><strong>Skills:</strong> {resumeData.skills}</p>
    </div>
  );
}
