# 🌐 Personal Portfolio - Ritik Kumar

This is my personal portfolio website built using **React.js**, animated with **GSAP**, and powered by a **Node.js backend** to handle contact form submissions.  
Frontend is deployed on **Netlify**, and backend is hosted on **Render**.

---

## 🚀 Live Demo

👉 [Visit Portfolio](https://portfolio-ar-ritik.netlify.app)

---

## 🛠️ Tech Stack

### Frontend:
- ⚛️ React.js
- 🎨 CSS3
- 🎞️ GSAP & ScrollTrigger for animations
- 📦 Hosted on [Netlify](https://www.netlify.com/)

### Backend:
- 🟫 Node.js + Express
- 📬 Nodemailer for email sending
- 🔐 dotenv for environment variables
- ☁️ Hosted on [Render](https://render.com/)

---

## 📬 Features

- 💼 Showcase of projects, skills, and experience
- ⚡ Smooth scroll-triggered animations
- 📱 Fully responsive on all devices
- 📨 Contact form connected to backend email API
- 🔒 Environment-based secure handling

---

## 📂 Project Structure
```bash
my-portfolio/
├── client/                    # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── ...other components
│   ├── .env                   # Frontend environment variables
│   ├── package.json
│   └── README.md              # (Optional) Frontend-specific readme

├── server/                    # Node.js backend
│   ├── utils/
│   │   └── sendMail.js        # Nodemailer logic
│   ├── routes/
│   │   └── contact.js         # Contact API route (optional)
│   ├── server.js              # Main Express server file
│   ├── .env                   # Backend env (SMTP creds, etc.)
│   ├── package.json
│   └── README.md              # (Optional) Backend-specific readme

├── .gitignore
├── README.md                  # 🔥 Main readme for the whole project
└── LICENSE                    # (Optional)
```

📩 Contact Form Backend
The backend is deployed on Render and handles /send-email POST requests via an Express API. It uses Nodemailer to send messages to my inbox.

🧪 Running Locally
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/ritik-kumar123/portfolio.git
cd portfolio
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start Frontend
bash
Copy
Edit
npm start
4. Backend (Optional if you want to test locally)
Create a separate folder backend/

Add your Express server and routes (like /send-email)

Use .env for secure configs (e.g. SMTP credentials)

📸 Screenshots
Homepage	Contact Form

📎 Links
## 💻 GitHub Profile  
[https://github.com/ritik-kumar123](https://github.com/ritik-kumar123)


📝 License
This project is open source and free to use. Attribution is appreciated. 😊

### ✅ Next Steps
- Add this to your project root as `README.md`
- Replace `screenshot1.png` and `screenshot2.png` with real image file names (or remove section if not needed)

Want me to help you write a separate **README for the backend repo** (if it’s in a separate folder/repo)? Just let me know!
