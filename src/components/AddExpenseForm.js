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
    <form onSubmit={handleSubmit} className="flex flex-col mt-4 justify-center items-center gap-4 mb-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border w-96 p-3 text-white  bg-gray-700 rounded-2xl"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
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
      <button type="submit" className="bg-yellow-400  cursor-pointer  text-black font-bold px-4 py-3 rounded-2xl ">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
