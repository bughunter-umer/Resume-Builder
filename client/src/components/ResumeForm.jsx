import { useState } from "react";

export default function ResumeForm({ setResumeData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    address: "",
    experience: "",
    projects: "",
    photo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Convert uploaded image to Base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result }); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/resumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save resume");

      const data = await res.json();
      setResumeData(data);
      alert("Resume saved successfully!");
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Error saving resume!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg mx-auto mt-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-blue-600 text-center">
        Create Your Resume
      </h2>

      <input
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        required
      />
      <input
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />
      <input
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />
      <textarea
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="experience"
        placeholder="Work Experience"
        rows="3"
        onChange={handleChange}
      />
      <textarea
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="projects"
        placeholder="Projects"
        rows="3"
        onChange={handleChange}
      />
      <input
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="education"
        placeholder="Education"
        onChange={handleChange}
      />
      <input
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="skills"
        placeholder="Skills (comma separated)"
        onChange={handleChange}
      />

      {/* ✅ File Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Save Resume
      </button>
    </form>
  );
}
