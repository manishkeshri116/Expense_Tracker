import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ amount, category, date });
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
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
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
