📘 Project Execution Guide (Frontend + Backend + MongoDB)

This document explains how to setup, run, and test the FullStack User Management App built using:

Frontend: Next.js (React framework)

Backend: Node.js with Express

Database: MongoDB

📁 Folder Structure

fullstack-crud-app/
├── backend/
│   ├── src/
│   │   ├── config/         # Database connection
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # Route mappings
│   │   └── server.js       # Main server file
│   ├── .env                # Environment config
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/          # Routing and views
│   │   ├── components/     # Reusable components
│   │   ├── services/       # Axios API handlers
│   │   └── styles/         # CSS Modules
│   └── package.json

⚙️ Prerequisites

Make sure the following are installed:

Node.js (v16+ preferred)

MongoDB

▶️ How to Run the Project

🔹 Step 1: Start MongoDB

Make sure MongoDB is running locally on port 27017. You can start it using:

mongod

MongoDB Compass can be used to visually inspect the database: https://www.mongodb.com/try/download/compass

🔹 Step 2: Backend Setup

cd backend
npm install

Create .env file in /backend:

MONGO_URI=mongodb://localhost:27017/userdb
PORT=5000

Start backend server:

npm run dev

The backend will run at http://localhost:5000

🔹 Backend Folder Summary

models/User.js – Mongoose schema for user

routes/userRoutes.js – All API endpoints

controllers/userController.js – Logic for CRUD

config/db.js – MongoDB connection setup

server.js – App entry point

🔹 Step 3: Frontend Setup

cd frontend
npm install

Start frontend:

npm run dev

The frontend will run at http://localhost:3000

🔹 Frontend Folder Summary

pages/index.tsx – Landing page with buttons

pages/add-user/ – Form page + confirm page

pages/users/ – List view with cards

components/ – UI components (UserForm, UserCard, ConfirmUser)

services/userService.ts – Axios HTTP requests

styles/ – Custom CSS module files

✅ Testing Instructions

Go to http://localhost:3000

Click Add User → fill the form → Continue

Review on confirmation screen → click Done

Click List View → check card display

Use Edit to update a user

Use Delete to remove a user

Try entering same email again → alert shown

🔍 Check Data in MongoDB

Using MongoDB Compass:

Open Compass → Connect to mongodb://localhost:27017

Open userdb database → users collection

View inserted, updated, or deleted users

💡 Notes

Make sure MongoDB is started before backend

Port conflicts? Change them in .env or scripts

Uses sessionStorage for transferring form data

Proper validation added (email, mobile, age, interest)
