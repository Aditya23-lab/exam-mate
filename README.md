# Exam Mate

**Exam Mate** is a full-stack web application designed for **college and school students** to easily **access, upload, and share previous year question papers (PYQs) and study resources**.  

It allows students to find exam papers by **branch, subject, semester, or exam type**, preview them online, and download them for offline use. It also provides **autocomplete suggestions** to make searching faster and more convenient.  

The platform supports **both college and school modes**, ensuring students of all levels can benefit. Additionally, features like **feedback, leaderboard, and version tracking** make it a collaborative and user-friendly tool.

Exam Mate is built to be **mobile responsive**, so students can access it from their phones, tablets, or computers seamlessly.

---

## Why Exam Mate?

Students often struggle to find reliable previous year papers or study resources. Exam Mate centralizes these resources in **one platform**, making exam preparation easier, faster, and more organized.

---

## Features

### Backend
- Node.js + Express + MongoDB Atlas
- User authentication (Register/Login/Logout with JWT)
- File upload/download (PDF, DOC, Images)
- Secure routes with auth middleware
- File preview (PDF + images)
- Autocomplete suggestions (subject, branch, college, school)

### Frontend
- React 19 + Vite + TailwindCSS + shadcn/ui
- Registration & Login forms
- Protected/private routes
- File Upload Page with College & School modes
- Autocomplete inputs
- Filters on /files page (subject, branch, semester, exam type)
- File Cards with pastel colors and version info
- Mobile responsive design
- Feedback section with toggle for performance

---

## Screenshots

### Landing Page
![Landing Page](screenshot/ExamMate.jpeg)

### Registration Page
![Register](screenshot/Register.jpeg)

### Login Page
![Login](screenshot/Login.jpeg)

### File Upload Page
![File Upload](screenshot/upload.jpeg)

### All Files Page
![All Files](screenshot/All_Files.jpeg)

### Leaderboard
![Leaderboard](screenshot/Leaderboard.jpeg)

---

## Tech Stack

**Backend:** Node.js, Express, MongoDB Atlas, JWT  
**Frontend:** React 19, Vite, TailwindCSS, shadcn/ui  
**Deployment:** Render (Backend), Vercel/Netlify (Frontend)

---

## Installation

### Backend
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your MongoDB Atlas URI and JWT_SECRET
npm start


### Frontend
cd exam-mate-frontend
npm install
npm run dev


## Deployment

- Backend: Render / Railway / VPS  
- Frontend: Vercel / Netlify  
- Make sure to update frontend API base URL to deployed backend URL


## Environment Variables

| Variable   | Description                        |
|------------|------------------------------------|
| MONGO_URI  | MongoDB Atlas connection string     |
| JWT_SECRET | Secret key for JWT authentication |
| PORT       | Backend server port (default 5000) |



## Contributing
- Fork the repo  
- Create a new branch  
- Make changes and push  
- Create a pull request  

## License
This project is open-source and free to use.
