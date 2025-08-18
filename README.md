# Tripnest App

**Tripnest** is a modern, performant travel & entertainment web application built with the **MERN stack** (MongoDB, Express, React/Next.js, Node.js), following clean architecture principles for scalability and maintainability.

---

## 🚀 Features

* **Next.js 14**: Fast, server-rendered React framework
* **Tailwind CSS**: Utility-first responsive styling
* **Redux Toolkit**: Scalable state management
* **Axios**: Simplified API interactions
* **Authentication**: JWT / OAuth login & registration
* **Interactive Games**: Trivia, challenges, and leaderboards
* **Dashboard**: Real-time user stats & achievements
* **Mobile-First**: Fully responsive across devices
* **Express.js**: RESTful backend API
* **MongoDB**: NoSQL database integration

---

## 🏗️ Clean Architecture Overview

The project follows **Clean Architecture** to ensure separation of concerns:

```text
├── frontend/                # Next.js app (Presentation Layer)
│   ├── pages/               # Route & page components
│   ├── components/          # Reusable UI components
│   ├── store/               # Redux slices (Application Layer)
│   ├── services/            # API service wrappers
│   └── styles/              # Tailwind CSS config
│
└── backend/                 # Node.js + Express app
    ├── src/
    │   ├── domain/          # Entities & business rules
    │   ├── usecases/        # Application-specific logic
    │   ├── adapters/        # Controllers & data interfaces
    │   ├── infrastructure/  # MongoDB client, auth, etc.
    │   └── server.ts        # Express server entry point
```

---

## 📂 Frontend Setup

```bash
# Clone the repo
git clone https://github.com/alibenhenia/Tripnest.git
cd Tripnest/frontend

# Install dependencies
npm install

# Create .env.local
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Run development server
npm run dev
```

Runs at `http://localhost:3000`

---

## 📂 Backend Setup (Node.js + Express)

```bash
cd Tripnest/backend

# Install dependencies
npm install

# Create a .env file
PORT=5000
MONGO_URI=mongodb://localhost:27017/Tripnest
JWT_SECRET=your_jwt_secret_key

# Start the server
npm run dev
```

Runs at `http://localhost:5000`

> Ensure MongoDB is running locally or use MongoDB Atlas.

---

## 🔧 Deployment Architecture

1. **Frontend**: Hosted on [Vercel](https://vercel.com) or any static host
2. **Backend**: Hosted on [Render](https://render.com), [Railway](https://railway.app), or VPS
3. **Database**: MongoDB Atlas (or self-hosted MongoDB)
4. **Media Storage**: Optional S3, Cloudinary, or local storage
5. **Monitoring**: Basic logging with `morgan`, add APM tools if needed

---

## 🛠️ Scripts & Commands

| Command                      | Location | Description                         |
| ---------------------------- | -------- | ----------------------------------- |
| `npm run dev`                | frontend | Start Next.js development server    |
| `npm run build && npm start` | frontend | Build and start in production       |
| `npm run dev`                | backend  | Start Express API server (dev mode) |
| `npm run build && npm start` | backend  | Compile TypeScript and run server   |

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/xyz`)
3. Commit changes (`git commit -m "feat: add xyz"`)
4. Push to branch (`git push origin feature/xyz`)
5. Open a Pull Request

Follow the existing code style and ensure all changes are tested.

---

## 📄 License

MIT © ali benhenia

