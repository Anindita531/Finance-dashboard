import transactions from "../../data/mockTransactions";

const SummaryCards = () => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    /* w-full ar px-2 ensure  cards are never touch mobile screen  */
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 w-full px-2 sm:px-0">
      
      {/* Balance Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center transition-transform hover:scale-[1.02]">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Balance</h2>
        <p className="text-2xl font-black text-blue-600 dark:text-blue-400">₹{balance.toLocaleString()}</p>
      </div>

      {/* Income Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center transition-transform hover:scale-[1.02]">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Income</h2>
        <p className="text-2xl font-black text-green-600 dark:text-green-400">₹{income.toLocaleString()}</p>
      </div>

      {/* Expense Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center transition-transform hover:scale-[1.02]">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Expense</h2>
        <p className="text-2xl font-black text-red-600 dark:text-red-400">₹{expense.toLocaleString()}</p>
      </div>

    </div>
  );
};

export default SummaryCards;