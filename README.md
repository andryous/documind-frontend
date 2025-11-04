# DocuMind - Frontend UI

![React](https://img.shields.io/badge/React-19.1.1-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-cyan?style=flat-square)

A modern and responsive UI for submitting invoices to the DocuMind AI API. Built with React, TypeScript, and Vite, and ready for seamless deployment on Vercel.

## ► Key Features

- **Modern UI/UX:** A minimal, professional, and fully responsive layout built with Tailwind CSS and ShadCN/UI.
- **Dynamic State Management:** A single-page app (SPA) that handles all application states (`Idle`, `Loading`, `Success`, `Error`) client-side.
- **Interactive File Upload:** Supports both file selection and "drag-and-drop" for a seamless user experience.
- **Adaptive Data Display:** Presents extracted JSON data in a table that elegantly transforms into a card layout on mobile devices.
- **Robust & Focused:** Strictly accepts `application/pdf` file types to ensure reliable processing by the backend.

## ► Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Components:** ShadCN/UI

## ► Local Development

### 1. Prerequisites

- Node.js (v18 or higher)
- `npm` (or `yarn` / `pnpm`)
- The [DocuMind Backend API](https://github.com/andryous/documind-backend) must be running on `http://localhost:8000`.

### 2. Clone & Install Dependencies

```bash
# Clone the repository
git clone [https://github.com/andryous/documind-frontend.git]
cd documind-frontend

# Install dependencies
npm install
```

### 2. Clone & Install Dependencies

Run the Application

```bash
npm run dev
```

The application will start on http://localhost:5173 and will automatically connect to the backend running on http://localhost:8000.

👤 Author
Claudio Rodriguez
