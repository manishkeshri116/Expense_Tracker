import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-2">Summary</h2>
      <p className="text-lg">Total Amount: ₹{totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseSummary;
