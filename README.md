![image](https://github.com/user-attachments/assets/9b6a1bad-2012-4ee5-a63e-aad743b824e0)
![image](https://github.com/user-attachments/assets/f688c247-8129-4a48-b27d-08c1f4b1fe65)
![image](https://github.com/user-attachments/assets/3b251c20-8e22-4b2a-8605-df3aec63bb17)

# MERN CRUD APP

A simple MERN stack application for managing users with Create, Read, Update, and Delete (CRUD) functionality.

## Features

- Add new users
- View all users
- Update user details
- Delete users

## Tech Stack

- **Frontend:** React, React Router, Axios, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB is installed and running locally

### Installation

1. **Install backend dependencies:**
   ```bash
   cd Server
   npm install cors express mongoose nodemon
   ```
 **Install frontend dependencies:**
   ```bash
   cd ../Client
   npm install axios bootstrap react-router-dom
   ```

### Running the Application

1. **Start MongoDB**  
   Make sure MongoDB is running on your system.

2. **Start the backend server:**
   ```bash
   cd Server
   node index.js
   ```

3. **Start the frontend development server:**
   ```bash
   cd ../Client
   npm run dev
   ```

4. **Open your browser and go to:**  
   [http://localhost:5173](http://localhost:5173)

## Folder Structure

```
MERN-CRUD-APP/
│
├── Client/      # React frontend
├── Server/      # Express backend
└── README.md
```

