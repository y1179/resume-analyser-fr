# ResumeAI — Frontend

The client for InterviewAI, an AI-powered resume analyzer and interview prep tool. Paste a job description, upload your resume (or write a quick self-description), and get back an ATS match score, tailored interview questions, and a personalized prep roadmap — all in one page.

**Live demo:** `https://analyserresume.netlify.app/`
**Backend repo:** `https://github.com/y1179/resume-analyser-back`

---

## ✨ Features

- Paste a job description and upload a resume (PDF/DOCX) or write a quick self-description
- View an animated ATS match score with a full breakdown (skills, experience, keywords, education)
- Browse tailored technical and behavioral interview questions, each with the interviewer's intention and a model answer
- Follow a personalized 7-day preparation roadmap
- See flagged skill gaps for the target role
- Download an ATS-optimized resume as a PDF, generated from your actual data

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React (Vite) |
| Routing | React Router |
| HTTP client | Axios |
| Styling | SCSS |
| Auth | HTTP-only cookie session (via backend) |

---

## 📂 Project Structure

```
Frontend/
src/
├── features/
│   ├── auth/
│   ├── interview/
│   └── landing/
├── components/
├── assets/
└── App.jsx
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone [your frontend repo URL]
cd Frontend

# Install dependencies
npm install

# Add your .env file (see above)

# Run in development
npm run dev

# Build for production
npm run build
```

Runs at `http://localhost:5173` by default (Vite's default port).

---

## 🔗 How It Connects to the Backend

All API calls go through a shared Axios instance (`useInterview.js`) configured with `withCredentials: true`, so authentication is handled entirely via an HTTP-only cookie set by the backend — no tokens are stored or sent manually from the client.

| Action | Backend endpoint |
|---|---|
| Generate a new report | `POST /api/interview/` |
| View a saved report | `GET /api/interview/report/:interviewId` |
| View all reports | `GET /api/interview/` |
| Download ATS resume PDF | `POST /api/interview/resume/pdf/:interviewReportId` |

See the [backend README](../Backend/README.md) for full API details.
