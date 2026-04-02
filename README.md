# Finance Dashboard UI

## Overview

A responsive finance dashboard built using React and Tailwind CSS to
track and analyze financial activity. The project demonstrates frontend
development skills including UI design, state management, and
component-based architecture.


A clean, interactive, and responsive finance management dashboard built with **React**, **Tailwind CSS**, and **Recharts**. This project demonstrates state management, data visualization, and Role-Based Access Control (RBAC).

**🚀 [Live Demo Link](https://finance-dashboard-gamma-coral.vercel.app/)**

---

## ✨ Key Features

### 🔐 1. Role-Based UI (RBAC)
- **Admin Mode:** Full access to view, add, and delete transactions.
- **Viewer Mode:** Read-only access. The "Add Transaction" section and "Delete" actions are completely unmounted from the UI to ensure a clean user experience for non-admin users.

### 📊 2. Dynamic Data Visualization
- **Balance Trend:** A line chart showing the cumulative balance over time with interactive tooltips.
- **Spending Breakdown:** A modern Donut chart visualizing expenses across categories (Food, Transport, Salary, etc.).
- **Responsive Charts:** Built using `Recharts` with `ResponsiveContainer` to ensure clarity on all screen sizes from mobile to desktop.

### 💡 3. Intelligent Insights Engine
- Automatically identifies the **Highest Spending Category**.
- Calculates **Total Monthly Expenses** in real-time.
- Provides a visual **Progress Bar** for budget allocation analysis and observation-based feedback.

### 💾 4. Data Persistence & Management
- **Local Storage:** Integrated `localStorage` to ensure data remains intact even after a page refresh.
- **Pagination:** Handles datasets efficiently with a 5-item-per-page limit and smooth navigation.
- **Search & Filter:** Real-time searching by category and filtering by transaction type (Income/Expense).

### 📥 5. One-Click Export
- **JSON Export:** Download the entire transaction history in structured JSON format.
- **CSV Export:** Professional CSV formatting for spreadsheet analysis (Excel/Google Sheets).
### 🎨 6. Modern UI/UX Design
- **Tailwind CSS:** Clean, responsive design with full Dark Mode support.
- **Framer Motion:** Smooth animations for row entry and transitions.
- **Iconography:** Utilizes Lucide React / Heroicons for a polished look.
### Live Screenshot
![Live Screenshot](src/assets/LiveScreenShot/) !


---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS (with full Dark Mode support)
- **Charts:** Recharts
- **Animations:** Framer Motion (for smooth row entry and transitions)
- **Icons:** Lucide React / Heroicons
- **Deployment:** Vercel

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Anindita531/Finance-dashboard.git](https://github.com/Anindita531/Finance-dashboard.git)

## 📁 Project Structure

```text
src/
├── components/
│   ├── dashboard/
│   │   ├── SummaryCards.jsx
│   │   ├── Charts.jsx
│   │   └── Insights.jsx
│   ├── transactions/
│   │   ├── TransactionTable.jsx
│   │   └── AddTransactionModal.jsx
│   ├── role/
│   │   └── RoleSwitcher.jsx
│   └── layout/
│       └── Layout.jsx
├── data/
│   └── mockTransactions.js
├── pages/
│   └── Dashboard.jsx
├── App.jsx
└── main.jsx
├──LiveScreenshot/


```
## How to Run Locally

1.  Clone the repository
2.  Install dependencies: npm install
3.  Run the development server: npm run dev

## Live Demo

[Live Demo](https://finance-dashboard-gamma-coral.vercel.app/)

## Approach

-   Built using a modular component-based structure
-   Managed state using React hooks (useState)
-   Used mock data for simplicity
-   Focused on clean UI/UX and responsiveness
-   Implemented role-based conditional rendering

## Future Improvements

-   Add localStorage for data persistence
-   Integrate backend API
-   Add advanced filters and sorting


## Author

Anindita Ghosh
