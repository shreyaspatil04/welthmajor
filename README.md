# 💰 Welth – AI-Powered Personal Finance Management Platform

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase)
![Clerk](https://img.shields.io/badge/Authentication-Clerk-6C47FF)
![Google Gemini](https://img.shields.io/badge/AI-Google_Gemini-4285F4)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

</p>

---

## 🌐 Live Demo

**🔗 Live Application:**  
https://welthmajor-seven.vercel.app/

**💻 GitHub Repository:**  
https://github.com/shravanij22/welthmajor

---

# 📖 Overview

Welth is an AI-powered personal finance management platform designed to help users efficiently manage their finances through intelligent budgeting, expense tracking, recurring transaction automation, and AI-generated financial insights.

Built as my **Final Year Major Project** for the Bachelor of Engineering in Computer Engineering, the platform combines modern full-stack web development with Artificial Intelligence to simplify personal financial management.

The project emphasizes secure authentication, scalable architecture, responsive design, and intelligent automation while delivering a clean and intuitive user experience.

---

# ✨ Features

### 🔐 Secure Authentication
- User authentication using Clerk
- Protected routes
- Secure session management

### 💳 Financial Account Management
- Create multiple accounts
- Track account balances
- Manage account information

### 💸 Transaction Management
- Add income and expenses
- Categorize transactions
- Track spending history
- Create recurring transactions

### 📊 Analytics Dashboard
- Interactive charts
- Spending analysis
- Monthly financial overview
- Income vs Expense visualization

### 🤖 AI Financial Insights
Powered by **Google Gemini AI**

- Personalized financial recommendations
- Monthly financial summaries
- Intelligent spending analysis
- AI-generated reports

### 📅 Recurring Transactions
- Automatic recurring entries
- Scheduled transaction processing
- Monthly automation

### 📧 Email Reports
- Automated monthly financial reports
- Email notifications
- Financial summaries

### ☁️ Production Deployment
- Hosted on Vercel
- PostgreSQL database using Supabase
- Production-ready architecture

---

# 🛠️ Tech Stack

## Frontend

- Next.js 15
- React 19
- Tailwind CSS
- Radix UI
- Recharts

## Backend

- Next.js Server Actions
- Prisma ORM
- PostgreSQL (Supabase)

## Authentication

- Clerk Authentication

## Artificial Intelligence

- Google Gemini API

## Background Jobs

- Inngest

## Email

- React Email
- Resend

## Deployment

- Vercel

---

# 🏗️ System Architecture

```
                User
                  │
                  ▼
           Next.js Application
                  │
        ┌─────────┼─────────┐
        │         │         │
        ▼         ▼         ▼
     Clerk     Prisma     Gemini AI
 Authentication   ORM        API
        │         │
        ▼         ▼
     Supabase PostgreSQL
        │
        ▼
     Financial Data
```

---

# 📷 Application Screenshots

> *(Add screenshots of your application here.)*

Suggested screenshots:

- Landing Page
- Dashboard
- Account Management
- Transaction Creation
- Analytics Dashboard
- AI Insights
- Monthly Reports

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/shravanij22/welthmajor.git
```

Navigate to the project directory

```bash
cd welthmajor
```

Install dependencies

```bash
npm install
```

Configure environment variables

Create a `.env` file and add:

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

GEMINI_API_KEY=

SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=

RESEND_API_KEY=
```

Generate Prisma Client

```bash
npx prisma generate
```

Run Prisma migrations

```bash
npx prisma db push
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 📂 Project Structure

```
welthmajor
│
├── app
├── actions
├── components
├── lib
├── prisma
├── public
├── hooks
├── emails
├── middleware.js
├── package.json
└── README.md
```

---

# 💡 Key Highlights

- Full Stack Development
- AI Integration
- Responsive User Interface
- Secure Authentication
- PostgreSQL Database
- ORM with Prisma
- Server Actions
- Financial Analytics
- Background Job Processing
- Production Deployment

---

# 📚 Research Publication

This project was developed as my **Final Year Major Project** and was also published as a research paper.

**Title:**
> *AI-Powered Personal Finance Management Platform (Welth)*

📄 **Research Paper:** *(Add your paper link here)*

---

# 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Building production-ready full-stack applications
- Database design and management
- AI integration using Large Language Models
- Authentication and authorization
- Server-side rendering
- Background job scheduling
- API development
- Modern React architecture
- Cloud deployment
- Secure software development practices

---

# 📈 Future Improvements

- Investment portfolio tracking
- UPI and Bank API integration
- OCR receipt scanning
- Voice-based expense logging
- Mobile application
- Multi-currency support
- Advanced AI financial advisor
- Budget prediction using Machine Learning

---

# 👩‍💻 Author

**Shravani Jadhav**

Computer Engineering Graduate

📧 Email: *(Add your email)*

🔗 GitHub:
https://github.com/shravanij22

🔗 LinkedIn:
*(Add your LinkedIn URL)*

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

---

## License

This project is developed for educational and portfolio purposes.

© 2026 Shravani Jadhav
