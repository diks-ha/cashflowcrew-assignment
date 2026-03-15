# 💡 IdeaSpark - MERN Stack Idea Board

## 🌐 Live Demo
[![Frontend](https://img.shields.io/badge/Frontend-Live-brightgreen)](https://your-app.vercel.app)
[![Backend API](https://img.shields.io/badge/API-Docs-blue)](https://your-backend.onrender.com/api/ideas)

## 🛠 Tech Stack
```
Frontend: React 18 • CSS3 • Vite
Backend: Node.js • Express • MongoDB
Database: MongoDB Atlas • Mongoose
Deployment: Vercel • Render
```

## ✨ Features
- 📝 Create ideas (title, description, author)
- 👍 Upvote system with real-time updates
- 🗑️ Delete ideas
- 🔍 Search by title/author
- 📱 Fully responsive design
- ✅ Form validation
- 🚀 50+ demo ideas seeded

## 🚀 Quick Start (1 minute)
```bash
git clone https://github.com/[username]/cashflowcrew-assignment.git
cd cashflowcrew-assignment

# Terminal 1 - Backend
cd server && npm i && npm run seed && npm run dev

# Terminal 2 - Frontend  
cd ../client && npm i && npm start
```

**Frontend:** http://localhost:3000  
**Backend:** http://localhost:5000

## 🗄 Folder Structure
```
cashflowcrew-assignment/
├── README.md           # 📖 This file
├── TODO.md            # 📋 Task tracker
├── client/            # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
└── server/            # Express API
    ├── models/
    │   └── Idea.js
    ├── routes/
    │   └── ideaRoutes.js
    ├── controllers/
    │   └── ideaController.js
    ├── config/
    │   └── db.js
    ├── server.js
    └── package.json
```

## 🔧 Local Setup

### 1. MongoDB Atlas
1. Sign up at [MongoDB Atlas](https://account.mongodb.com/account/register)
2. Create **free cluster** (M0 Sandbox)
3. **Create database user** (read/write)
4. Get **connection string**
5. **Whitelist IP**: `0.0.0.0/0`

### 2. Backend Setup
```bash
cd server
npm install
cp ../.env.example .env
# Edit .env: MONGODB_URI=your_atlas_url
npm run seed  # Add 50 demo ideas
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
npm start
```

## 📊 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/ideas` | Get all ideas (upvotes desc) |
| `POST` | `/api/ideas` | Create new idea |
| `PUT` | `/api/ideas/:id/upvote` | Upvote idea |
| `DELETE` | `/api/ideas/:id` | Delete idea |

## ☁️ Deployment

### Backend - Render.com
1. Push to GitHub
2. [Render.com](https://render.com) → New Web Service
3. Connect GitHub repo
4. **Build Command**: `npm install`
5. **Start Command**: `npm start`
6. **Env Vars**: `MONGODB_URI=your_atlas_url`

### Frontend - Vercel
1. Push to GitHub
2. [Vercel.com](https://vercel.com) → Import Git repo
3. **Build Settings**:
   ```
   Build: npm install && npm run build
   Output: build
   ```
4. **Env Var**: `REACT_APP_API_URL=https://your-backend.onrender.com/api`

## 📤 GitHub Setup
```bash
git init
git add .
git commit -m "Initial commit: Complete IdeaSpark MERN"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cashflowcrew-assignment.git
git push -u origin main
```

## 🤝 Contributing
1. Fork the repo
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License
This project is MIT licensed.</content>

