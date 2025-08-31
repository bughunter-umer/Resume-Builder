import jsPDF from "jspdf";

export default function DownloadButton({ resumeData }) {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Resume", 20, 20);

    doc.setFontSize(12);
    doc.text(`Name: ${resumeData.name}`, 20, 40);
    doc.text(`Email: ${resumeData.email}`, 20, 50);
    doc.text(`Phone: ${resumeData.phone}`, 20, 60);
    doc.text(`Education: ${resumeData.education}`, 20, 70);
    doc.text(`Skills: ${resumeData.skills}`, 20, 80);

    doc.save("resume.pdf");
  };

  return (
    <button onClick={handleDownload} style={{ marginTop: "20px" }}>
      Download PDF
    </button>
  );
}
