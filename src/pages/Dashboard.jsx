import Layout from "../components/layout/Layout";
import SummaryCards from "../components/dashboard/SummaryCards";
import Charts from "../components/dashboard/Charts";
import TransactionTable from "../components/transactions/TransactionTable";
import RoleSwitcher from "../components/role/RoleSwitcher";
import Insights from "../components/dashboard/Insights";
import transactions from "../data/mockTransactions";
import { useState } from "react";

const Dashboard = () => {
  const [role, setRole] = useState("viewer");

  return (
    <Layout>
      {/* Container with responsive max-width and horizontal padding */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 space-y-8">
        
        {/* Header Section: Role Switcher ar Title-ke responsive kora hoyeche */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
            Dashboard
          </h1>
          <RoleSwitcher role={role} setRole={setRole} />
        </div>

        {/* Components sequence optimized for mobile stacking */}
        <div className="flex flex-col gap-8">
          <SummaryCards />
          
          <Charts transactions={transactions} />
          
          {/* Table-er overflow handle korbe TransactionTable er wrapper */}
          <TransactionTable role={role} />

          <Insights transactions={transactions} />
        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;