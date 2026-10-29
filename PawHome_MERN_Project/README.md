# PawHome MERN Project

Beginner-friendly full-stack pet adoption website based on your supplied PawHome reference image. Includes React/Vite frontend, Express/Node backend, MongoDB models, sample pet seeding, register/login, search/filter, Add Pet form, and adoption request storage.

## Requirements
- Node.js 18+ (LTS)
- MongoDB Community Server running locally, or MongoDB Atlas URI
- VS Code

## Run it
1. Extract the ZIP and open `PawHome_MERN_Project` in VS Code.
2. Make sure MongoDB Server is running.
3. Open a terminal in the project root and run:
   ```bash
   npm install
   npm run install:all
   npm run dev
   ```
4. Open `http://localhost:5173`. Backend health check: `http://localhost:5000/api/health`.

If using MongoDB Atlas, change `MONGO_URI` in `server/.env`. Do not publish secrets to GitHub.

## Features
- Responsive PawHome layout with purple hero, paw branding, pet photos, statistics, categories, cards, adoption steps and dark footer.
- Separate Home (`/`), Adopt (`/adopt`) and About (`/about`) pages; the original Home content is retained.
- Shared navigation and footer across pages; browser Back/Forward navigation is supported.
- Search by pet name, breed, category or city; category filters.
- Register/login with hashed password and JWT.
- Add pet (login required).
- Adoption requests saved in MongoDB.
- Seeds Bruno, Misty, Kiwi and Tommy when the pets collection is empty.

## API
`GET /api/health`, `GET /api/pets`, `GET /api/pets/:id`, `POST /api/pets` (auth), `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me` (auth), `POST /api/adoptions`.

## Troubleshooting
- `ECONNREFUSED 127.0.0.1:27017`: start the MongoDB service.
- `npm` not recognized: install Node.js LTS and reopen VS Code.
- Images need internet access. This is a student/demo project; harden security before production deployment.
