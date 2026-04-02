import { useState } from "react";

const AddTransactionModal = ({ onAdd }) => {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    // Validation
    if (!form.date || !form.amount || !form.category) {
      setError("Please fill in all fields");
      setSuccess("");
      return;
    }

    // Clear error
    setError("");

    // Send data to parent
    onAdd({
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    });

    // Success message
    setSuccess("Transaction added successfully");

    // Reset form
    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <div className="mb-4 p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Add Transaction</h3>

      {/* Error */}
      {error && <p className="text-red-500 mb-2">{error}</p>}

      {/* Success */}
      {success && <p className="text-green-500 mb-2">{success}</p>}

      <div className="flex flex-wrap gap-2">
        {/* Date */}
        <input
          type="date"
          className="text-black border p-2 dark:bg-gray-700 dark:text-white"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        {/* Amount */}
        <input
          type="number"
          placeholder="Amount"
          className="text-black border p-2 dark:bg-gray-700 dark:text-white"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        {/* Category */}
        <input
          type="text"
          placeholder="Category"
          className="text-black border p-2 dark:bg-gray-700 dark:text-white"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        {/* Type */}
        <select
          className="text-black border p-2 dark:bg-gray-700 dark:text-white"
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={!form.date || !form.amount || !form.category}
          className="bg-blue-600 text-white px-4 disabled:opacity-50"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTransactionModal;