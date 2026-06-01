# Pantry Pro — Grocery Pro OS

A modern, opinionated grocery and pantry management web app (prototype). This workspace contains a React + Vite frontend and an Express + MongoDB backend with JWT authentication.

## Features
- Clean, Tailwind-driven UI with Framer Motion animations
- JWT-based authentication (register, login, profile) backed by MongoDB
- Protected transaction and inventory APIs
- Demo data for pages (recipes, pantry boards, household members)

## Tech stack
- Frontend: React, Vite, Tailwind CSS, Framer Motion, Recharts
- Backend: Node.js, Express, Mongoose (MongoDB), jsonwebtoken, bcryptjs

## Getting started

Prerequisites

- Node.js (18+ recommended)
- MongoDB (local or cloud URI)

Quick start

1. Install dependencies for server and client:

```bash
npm --prefix "./server" install
npm --prefix "./client" install
```

2. Create a `.env` file inside the `server` folder with at minimum:

```
MONGO_URI=mongodb://127.0.0.1:27017/pantrypro
JWT_SECRET=replace_with_a_strong_secret
PORT=5000
```

3. Run the server (development):

```bash
npm --prefix "./server" run dev
```

4. Run the client (development):

```bash
npm --prefix "./client" run dev
```

5. Open the app at `http://localhost:5173` (Vite) and the API at `http://localhost:5000`.

API endpoints

- `POST /api/auth/register` — register new user (returns token + user)
- `POST /api/auth/login` — login (returns token + user)
- `PUT /api/auth/me` — update profile (protected)
- `GET /api/transactions` — protected transactions endpoints

Demo data

The client includes in-repo demo content used to populate pages for presentation and testing. See `client/src/data/groceryData.js` for examples.

Security and production notes

- Replace `JWT_SECRET` with a strong secret and do not commit `.env` to source control.
- Use TLS/HTTPS in production and secure cookie or httpOnly storage for tokens.
- Add rate-limiting, input validation, and logging for production readiness.

Contributing

PRs are welcome. Create a feature branch, open a PR, and include a short description of your changes.

License

This project is licensed under the MIT License — see `LICENSE`.