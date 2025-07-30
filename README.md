
# 📝 MERN Stack Note Taking App

## 🚀 Highlights

- 🧱 Full-Stack App built using the **MERN Stack** (MongoDB, Express.js, React, Node.js)
- ✨ Features:
  - Create, Update, and Delete notes with **Title** and **Description**
  - Fully responsive UI with modern design
- 🛠️ RESTful API: Built and tested using best practices
- ⚙️ **Rate Limiting** implemented using **Upstash Redis** — real-world backend optimization
- 🌐 Explore core backend concepts:
  - HTTP Methods, Status Codes
  - SQL vs NoSQL comparisons
- 📦 Deployment Guide Included
- 🔐 `.env` Environment Variable Setup

---

## 🗂️ Backend (`/backend`)

### 🔐 Environment Variables

Create a `.env` file in the backend directory and add:

MONGO_URI=<your_mongo_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development


### ▶️ Run Backend

```bash
cd backend
npm install
npm run dev
```
🔗 Live App
https://thinkboard-a6ot.onrender.com/
