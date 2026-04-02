import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { useMemo } from "react";

const Charts = ({ transactions }) => {
  const { lineData, pieData } = useMemo(() => {
    let balance = 0;
    const lineData = transactions.map((t) => {
      t.type === "income" ? (balance += t.amount) : (balance -= t.amount);
      return { date: t.date, balance };
    });
    const categoryMap = {};
    transactions.forEach((t) => {
      if (t.type === "expense") categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    });
    const pieData = Object.keys(categoryMap).map((key) => ({ name: key, value: categoryMap[key] }));
    return { lineData, pieData };
  }, [transactions]);

  const COLORS = ["#6366F1", "#10B981", "#F43F5E", "#F59E0B"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 w-full">
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-bold mb-4 dark:text-white">Balance Trend</h2>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fontSize: 10 }} axisLine={false} />
              <YAxis tick={{ fontSize: 10 }} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
              <Line type="monotone" dataKey="balance" stroke="#6366F1" strokeWidth={3} dot={{ r: 4, fill: '#6366F1' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-bold mb-4 dark:text-white">Spending Breakdown</h2>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {pieData.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} stroke="none" />)}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts;