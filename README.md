# 🌍 Travel Buddy – React Frontend

This is the React frontend for the Travel Buddy web app. It connects to a Node.js + Express API that delivers trending city data and current weather information.

---

## 🔧 Tech Stack

- React (via Vite)
- Fetch API for making HTTP requests
- Express.js backend (hosted locally)
- GeoDB Cities API (via RapidAPI)
- OpenWeatherMap API

---

## 📸 Features

- Displays a list of popular global cities.
- Cities are fetched from the backend via `/api/cities` endpoint.
- Clicking a city opens a server-rendered Express page with current weather.
- Responsive, clean layout.

---

## 🚀 How to Run It Locally

### 1. Clone this repository

```bash
git clone https://github.com/shashanklaur/react-frontend.git
cd react-frontend

2. Install dependencies
npm install

3. Run the development server
npm run dev

This will run your React app at:
🔗 http://localhost:5173

🌐 API Backend Setup (Required)
To run this frontend, you must also clone and run the backend:

📎 API Repo: https://github.com/shashanklaur/api-project

cd ../api-project
npm install
node app.js

📂 Project Structure
react-frontend/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md

🔗 Optional Deployment
If deployed using Vercel or Netlify, the live URL will go here:

📫 Contact
You can reach me via GitHub: @shashanklaur


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
