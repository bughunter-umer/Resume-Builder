AI-Powered Resume Builder

An AI-powered Resume Builder with Frontend (React + Vite) and Backend (Node.js + Express + Postgres).
This app allows users to create, preview, and save resumes in a database, with an AI integration planned for smart suggestions.

🚀 Features

✍️ User-friendly resume form

👀 Live resume preview

💾 Save resumes to MongoDB

📤 API support for resume CRUD operations

⚡ React + Vite frontend with Tailwind UI

🛠 Node.js + Express backend with MongoDB

🏗 Project Structure
resume-builder/

│── server/       
# Node.js + Express + MongoDB

│   ├── models/    
# Mongoose models

│   ├── routes/   
# API routes

│   ├── server.js  
# Express server

│── client/        
# React + Vite + Tailwind

│   ├── src/

│   │   ├── components # ResumeForm, ResumePreview

│   │   ├── App.jsx

│   │   └── main.jsx

│── README.md


⚙️ Tech Stack

Frontend: React, Vite, Tailwind CSS
Backend: Node.js, Express.js
Database: Postgres

🔧 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/resume-builder.git
cd resume-builder

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in backend/ with:

PORT=5000
Postgres_URI=postgres://localhost:27017/resumebuilder


Run backend server:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


The frontend runs on:
👉 http://localhost:5173

The backend runs on:
👉 http://localhost:4000

📌 API Endpoints
Create Resume
POST /api/resumes


Body (JSON):

{
  "name": "Umer Awan",
  
  "email": "iamumerdaud@gmail.com",

  "phone": "0341-9322367",
  
  "education": "BSCS - Abbottabad University",
  
  "skills": "React, Next.js, Redux"
  
}

Get All Resumes
GET /api/resumes

Get Single Resume
GET /api/resumes/:id

Update Resume
PUT /api/resumes/:id

Delete Resume
DELETE /api/resumes/:id

🛡 Troubleshooting

If Postman shows "Failed to create resume" → Check MongoDB connection in .env.

Make sure you are sending JSON body not form-data.

Ensure express.json() is enabled in server.js.

📌 Roadmap

✅ Basic Resume Builder (form + preview)

✅ Save to database

🔜 AI suggestions for skills & job-specific resume optimization

🔜 Export to PDF

👨‍💻 Author

Umer Awan
Frontend Developer | React.js | Next.js | Redux Toolkit
LinkedIn
