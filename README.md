# RenewCred CMS

A full-stack Content Management System (CMS) built as part of the RenewCred Frontend Engineer Assignment.

## Live Demo

- Frontend: https://renew-cred-cms-puce.vercel.app
- Backend API: https://renewcred-backend-8lzx.onrender.com

## GitHub Repository

https://github.com/pranav-ukey/renewCredCMS

---

## Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication

---

## Features

### Public Website
- Homepage
- Standards Listing
- Standard Details Page
- Responsive Layout

### Admin Panel
- Admin Login
- Dashboard
- Create Standard
- Delete Standard
- JWT Authentication

---

## Project Structure

```
renewcred-cms
│
├── backend
│   ├── src
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── .env.local
│
└── README.md
```

---

## Installation

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

### Backend (.env)

```env
PORT=5000
MONGO_URL=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## API Endpoints

### Authentication

```
POST /api/auth/login
```

### Standards

```
GET /api/standards
GET /api/standards/:slug
POST /api/standards
PUT /api/standards/:id
DELETE /api/standards/:id
```

---

## Deployment

Frontend is deployed on **Vercel**.

Backend is deployed on **Render**.

---

## Author

**Pranav Ukey**