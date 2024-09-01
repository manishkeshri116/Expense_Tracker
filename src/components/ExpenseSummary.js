import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="p-4 mb-2 w-96  bg-white  rounded-2xl shadow-2xl">
      <h2 className="text-xl text-black font-bold mb-2">Summary</h2>
      <p className="text-lg text-black">Total Amount: ₹{totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseSummary;
