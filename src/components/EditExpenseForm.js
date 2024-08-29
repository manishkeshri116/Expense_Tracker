import React, { useState, useEffect } from 'react';

const EditExpenseForm = ({ expense, onUpdateExpense }) => {
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const [date, setDate] = useState(expense.date);

  useEffect(() => {
    setAmount(expense.amount);
    setCategory(expense.category);
    setDate(expense.date);
  }, [expense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateExpense({ ...expense, amount, category, date });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">Update Expense</button>
    </form>
  );
};

export default EditExpenseForm;
