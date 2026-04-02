import { useMemo } from "react";

const Insights = ({ transactions }) => {
  const { total, maxCat, percentage } = useMemo(() => {
    let total = 0;
    let map = {};
    transactions.forEach((t) => {
      if (t.type === "expense") {
        total += t.amount;
        map[t.category] = (map[t.category] || 0) + t.amount;
      }
    });
    let maxCat = "N/A", maxAmount = 0;
    for (let c in map) { if (map[c] > maxAmount) { maxAmount = map[c]; maxCat = c; } }
    const percentage = total > 0 ? Math.round((maxAmount / total) * 100) : 0;
    return { total, maxCat, percentage };
  }, [transactions]);

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 w-full mb-10">
      <h2 className="text-xl font-bold mb-6 dark:text-white flex items-center gap-2">
        <span className="text-yellow-500">💡</span> Quick Insights
      </h2>
      <div className="space-y-8">
        <div className="flex justify-between items-center bg-red-50 dark:bg-red-900/10 p-4 rounded-xl">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-red-500 mb-1">Total Monthly Expense</p>
            <p className="text-2xl font-black text-red-600 dark:text-red-500">₹{total.toLocaleString()}</p>
          </div>
          <span className="hidden xs:block text-[10px] font-bold px-2 py-1 bg-red-600 text-white rounded shadow-sm">HIGH SPENDING</span>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium dark:text-gray-300">
              Top Category: <span className="font-bold text-indigo-500 uppercase">{maxCat}</span>
            </span>
            <span className="text-sm font-bold text-gray-800 dark:text-white">{percentage}%</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3">
            <div className="bg-indigo-500 h-3 rounded-full transition-all duration-700 ease-out" style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic leading-relaxed">
            "You've allocated a significant portion of your budget to <b className="text-gray-700 dark:text-gray-200">{maxCat}</b> this month. Consider reviewing this category to optimize savings."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insights;