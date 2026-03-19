# PostManager

A lightweight React + Vite sample app to create, edit, delete, and list memory posts (commonplace book style).

- Modern React + Vite setup
- Local component state for posts (no backend yet)
- Modal form for create/edit w/ validation
- Category tags with color badges
- Tailwind-style utility CSS classes

## Features

- Add new post with title, category, and body
- Edit existing post in modal dialog
- Delete post with confirmation UI flow
- Auto-dates entries on create
- No-post placeholder message

## Components

- `App.jsx`: top-level state and modal handling
- `Navbar.jsx`: header + New Post button
- `Form.jsx`: create/edit modal form, field validation
- `Card.jsx`: post list, category styling, edit/delete actions

## Getting Started

1. Clone repository

   ```bash
   git clone <your-repo-url>
   cd postmanager
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run development server

   ```bash
   npm run dev
   ```

4. Open app

   Visit `http://localhost:5173` (or URL shown in terminal)

5. Build for production

   ```bash
   npm run build
   ```

6. Preview production build

   ```bash
   npm run serve
   ```

## Dependencies

- `react`, `react-dom`
- `vite`
- `uniqid` (post ID generation)

## Optional Improvements

- Persist posts in `localStorage` or backend API
- Add search + filter by category and date
- Add pagination or infinite scroll
- Improve accessibility and keyboard navigation

## Author

- Aman Sharma

