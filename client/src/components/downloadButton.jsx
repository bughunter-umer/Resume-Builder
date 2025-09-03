export default function DownloadButton({ resumeData }) {
  const handleDownload = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/resumes/${resumeData.id}/download`,
        {
          method: "GET",
        }
      );

      if (!res.ok) throw new Error("Failed to download resume");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${resumeData.name || "resume"}.pdf`; // ✅ Save with user name
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("❌ Error downloading:", err);
      alert("Failed to download resume");
    }
  };

  if (!resumeData) return null;

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleDownload}
        className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-xl shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300"
      >
        📄 Download Resume PDF
      </button>
    </div>
  );
}
