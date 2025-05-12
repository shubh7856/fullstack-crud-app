# Project Execution Guide (Frontend + Backend + MongoDB)

This document explains how to setup, run, and test the FullStack User Management App built using:

* **Frontend:** Next.js (React framework)
* **Backend:** Node.js with Express
* **Database:** MongoDB

---

## Folder Structure

```
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
```

---

## Prerequisites

Make sure the following are installed:

* [Node.js](https://nodejs.org/) (v16+ preferred)
* [MongoDB](https://www.mongodb.com/try/download/community)

---

## ▶How to Run the Project

### Clone the Repository

Start by cloning the codebase to your local machine:

Cmd
git clone https://github.com/shubh7856/fullstack-crud-app
cd fullstack-crud-app


### Step 1: Start MongoDB

Make sure MongoDB is running locally on port `27017`. You can start it using:

Cmd:
mongod

> MongoDB Compass can be used to visually inspect the database: [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)

### Step 2: Backend Setup (Dependencies + Run)

Cmd:
cd backend
npm install


Create `.env` file in `/backend`:

Cmd:
MONGO_URI=mongodb://localhost:27017/userdb
PORT=5000

Start backend server:

Cmd:
npm run dev

> The backend will run at `http://localhost:5000`

#### Backend Folder Summary

* `models/User.js` – Mongoose schema for user
* `routes/userRoutes.js` – All API endpoints
* `controllers/userController.js` – Logic for CRUD
* `config/db.js` – MongoDB connection setup
* `server.js` – App entry point

---

### Step 3: Frontend Setup (Dependencies + Run)

Cmd:
cd frontend
npm install


Start frontend:

Cmd:
npm run dev

> The frontend will run at `http://localhost:3000`

#### Frontend Folder Summary

* `pages/index.tsx` – Landing page with buttons
* `pages/add-user/` – Form page + confirm page
* `pages/users/` – List view with cards
* `components/` – UI components (UserForm, UserCard, ConfirmUser)
* `services/userService.ts` – Axios HTTP requests
* `styles/` – Custom CSS module files

---

## Testing Instructions

1. Go to [http://localhost:3000](http://localhost:3000)
2. Click **Add User** → fill the form → Continue
3. Review on confirmation screen → click **Done**
4. Click **List View** → check card display
5. Use **Edit** to update a user
6. Use **Delete** to remove a user
7. Try entering same email again → alert shown

---

## 🔍 Check Data in MongoDB

### Using MongoDB Compass:

* Open Compass → Connect to `mongodb://localhost:27017`
* Open `userdb` database → `users` collection
* View inserted, updated, or deleted users

---

## 💡 Notes

* Make sure MongoDB is started before backend
* Port conflicts? Change them in `.env` or scripts
* Uses `sessionStorage` for transferring form data
* Proper validation added (email, mobile, age, interest)

---

## 👨‍💻 Author

**Shubham Saraswat**

* MERN Developer
* [LinkedIn](https://www.linkedin.com/in/shubham-saraswat)
* portfolio:(https://mysubhamportfolio.netlify.app/)

---

All three layers (Frontend + Backend + DB) work independently and together for a complete CRUD experience.

> Ready for interview demo, submission, and future deployment!
