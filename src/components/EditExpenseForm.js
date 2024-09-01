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
    <form onSubmit={handleSubmit} className="flex flex-col mt-4 justify-center items-center gap-4 mb-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border w-96 p-3 text-white  bg-gray-700 rounded-2xl"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border w-96 p-3 text-white  bg-gray-700 rounded-2xl"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border w-96 p-3 text-white  bg-gray-700 rounded-2xl"
        required
      />
      <button type="submit" className="bg-yellow-400  cursor-pointer  text-black font-bold px-4 py-3 rounded-2xl ">Update Expense</button>
    </form>
  );
};

export default EditExpenseForm;
