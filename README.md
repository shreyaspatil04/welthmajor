# 💰 WealthAI — AI-Powered Personal Finance Management System

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react">
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql">
  <img src="https://img.shields.io/badge/Clerk-Authentication-blue">
  <img src="https://img.shields.io/badge/Google-Gemini-orange">
  <img src="https://img.shields.io/badge/License-MIT-green">
</p>

An AI-powered personal finance management platform that helps users track income, expenses, budgets, recurring transactions, and financial insights through an intelligent dashboard.

Developed as a Final Year B.E. Computer Engineering Major Project and accompanied by a published research paper in the International Research Journal of Modernization in Engineering Technology and Science (IRJMETS). :contentReference[oaicite:0]{index=0}

---

## ✨ Features

### 🤖 AI-Powered Finance Assistant

- AI-generated financial insights
- Personalized spending analysis
- Budget recommendations
- Expense categorization
- Receipt scanning support (OCR-based)

### 💳 Expense & Income Management

- Add income and expenses
- Categorize transactions
- Track recurring transactions
- Monthly financial summaries

### 📊 Interactive Dashboard

- Spending analytics
- Income vs Expense visualization
- Budget tracking
- Financial reports
- Charts using Recharts

### 🔐 Authentication & Security

- Clerk Authentication
- Protected routes
- Secure user sessions
- API protection
- Rate limiting using Arcjet

### 📧 Automation

- Scheduled financial reports
- Email notifications
- Automated reminders
- Background jobs powered by Inngest

---

# 🛠 Tech Stack

### Frontend

- Next.js 15
- React 19
- Tailwind CSS
- shadcn/ui
- Radix UI
- Recharts

### Backend

- Next.js Server Actions
- Prisma ORM
- PostgreSQL
- Clerk Authentication

### AI

- Google Gemini API

### Email

- Resend
- React Email

### Security

- Clerk Authentication
- Arcjet
- Middleware Protection

### Deployment

- Vercel
- Supabase PostgreSQL

---

# 📂 Project Structure

```
app/
components/
actions/
prisma/
lib/
hooks/
public/
emails/
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/shravanij22/welthmajor.git
cd welthmajor
```

## Install dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file.

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=

GOOGLE_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```

## Generate Prisma Client

```bash
npx prisma generate
```

## Push Database Schema

```bash
npx prisma db push
```

## Run locally

```bash
npm run dev
```

---

# 📸 Screenshots

> Add screenshots here.

Suggested screenshots:

- Landing Page
- Dashboard
- Expense Tracker
- Budget Planner
- Analytics
- AI Insights
- Profile
- Reports

---

# 🧠 System Architecture

The application follows a three-layer architecture:

- Presentation Layer (Next.js)
- Business Logic Layer (Server Actions)
- Data Layer (PostgreSQL + Prisma)

It integrates authentication, AI-powered analytics, automated reporting, and secure cloud-based data management into a unified platform. :contentReference[oaicite:1]{index=1}

---

# 📖 Research Publication

This project was published as:

**"WealthAI: An Intelligent AI-Driven Personal Finance Management System for Smart Financial Decision-Making"**

Published in:

**International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)**

Volume 08 • Issue 03 • March 2026 :contentReference[oaicite:2]{index=2}

---

# 🔮 Future Improvements

- Mobile application
- Bank account integration
- Investment portfolio tracking
- Predictive spending analysis
- Voice assistant
- Multi-currency support
- AI financial planning
- Export reports as PDF

---

# 👩‍💻 Author

**Shravani Sanjeev Jadhav**

Computer Engineering Graduate

- GitHub: https://github.com/shravanij22
- LinkedIn: https://www.linkedin.com/in/shravani-jadhav-44b58a284/
---

## ⭐ If you found this project interesting, consider giving it a star!
