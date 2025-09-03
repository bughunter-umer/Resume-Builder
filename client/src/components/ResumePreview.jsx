export default function ResumePreview({ resumeData }) {
  if (!resumeData) return null;

  return (
    <div className="bg-gray-50 shadow-lg rounded-2xl p-6 w-full max-w-2xl mx-auto mt-6">
      {/* Header with photo + name + contact */}
      <div className="flex items-center space-x-6 border-b border-gray-200 pb-4 mb-4">
        {resumeData.photo && (
          <img
            src={resumeData.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{resumeData.name}</h2>
          <p className="text-gray-600">{resumeData.email}</p>
          <p className="text-gray-600">{resumeData.phone}</p>
          <p className="text-gray-600">{resumeData.address}</p>
        </div>
      </div>

      {/* Resume Details */}
      <div className="space-y-4">
        <p>
          <span className="font-semibold text-blue-600">Education:</span>{" "}
          {resumeData.education}
        </p>
        <p>
          <span className="font-semibold text-blue-600">Skills:</span>{" "}
          {resumeData.skills}
        </p>
        <p>
          <span className="font-semibold text-blue-600">Experience:</span>{" "}
          {resumeData.experience}
        </p>
        <p>
          <span className="font-semibold text-blue-600">Projects:</span>{" "}
          {resumeData.projects}
        </p>
      </div>
    </div>
  );
}
