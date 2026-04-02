import { useState, useEffect } from "react";
import AddTransactionModal from "./AddTransactionModal";
import { fetchTransactions } from "../../services/api";
import transactionsData from "../../data/mockTransactions";
import { motion } from "framer-motion";

const TransactionTable = ({ role }) => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchTransactions().then((data) => {
      if (data.length) setTransactions(data);
      else setTransactions(transactionsData);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter, transactions]);

  const handleAdd = (newTxn) => setTransactions([newTxn, ...transactions]);
  const handleDelete = (id) => setTransactions(transactions.filter((t) => t.id !== id));

  const filtered = transactions.filter((t) => {
    const s = t.category.toLowerCase().includes(search.toLowerCase());
    const f = filter === "all" ? true : t.type === filter;
    return s && f;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentTransactions = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(transactions)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.json";
    a.click();
  };

  const exportCSV = () => {
    const headers = ["Date", "Amount", "Category", "Type"];
    const rows = transactions.map((t) => [t.date, t.amount, t.category, t.type]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const link = document.createElement("a");
    link.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 w-full overflow-hidden">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Transactions</h2>
      
      {role === "admin" && <AddTransactionModal onAdd={handleAdd} />}
      
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={exportJSON} className="bg-green-600 text-white px-3 py-1.5 rounded text-xs font-bold transition-colors hover:bg-green-700">JSON</button>
        <button onClick={exportCSV} className="bg-purple-600 text-white px-3 py-1.5 rounded text-xs font-bold transition-colors hover:bg-purple-700">CSV</button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          placeholder="Search..."
          className="border dark:border-gray-700 p-2 rounded-lg w-full sm:w-64 dark:bg-gray-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border dark:border-gray-700 p-2 rounded-lg w-full sm:w-40 dark:bg-gray-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="w-full overflow-x-auto rounded-xl border dark:border-gray-700">
        <table className="w-full min-w-[500px] text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            <tr>
              <th className="p-3 font-semibold">Date</th>
              <th className="p-3 font-semibold">Amount</th>
              <th className="p-3 font-semibold">Category</th>
              <th className="p-3 font-semibold">Type</th>
              {role === "admin" && <th className="p-3 text-center font-semibold">Action</th>}
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-800">
            {currentTransactions.map((t) => (
              <motion.tr key={t.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="p-3 whitespace-nowrap dark:text-gray-400">{t.date}</td>
                <td className="p-3 font-bold dark:text-white">₹{t.amount.toLocaleString()}</td>
                <td className="p-3 capitalize dark:text-gray-300">{t.category}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${t.type === "income" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>{t.type}</span>
                </td>
                {role === "admin" && <td className="p-3 text-center"><button onClick={() => handleDelete(t.id)} className="text-red-500 text-xs font-bold hover:text-red-700">Delete</button></td>}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-3 mt-6">
        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="p-2 border rounded-lg disabled:opacity-30 dark:border-gray-700 dark:text-white transition-opacity">Prev</button>
        <span className="text-xs dark:text-gray-400">Page {currentPage} of {totalPages || 1}</span>
        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages || totalPages === 0} className="p-2 border rounded-lg disabled:opacity-30 dark:border-gray-700 dark:text-white transition-opacity">Next</button>
      </div>
    </div>
  );
};

export default TransactionTable;