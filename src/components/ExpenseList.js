import React from 'react';

const ExpenseList = ({ expenses, onEditExpense }) => {
  return (
    <ul className="list-none p-0">
      {expenses.map(expense => (
        <li key={expense._id} className="border-b p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">₹{expense.amount}</h3>
            <p className="text-gray-600">{expense.category}</p>
            <p className="text-gray-400">{new Date(expense.date).toLocaleDateString()}</p>
          </div>
          <button
            onClick={() => onEditExpense(expense)}
            className="bg-yellow-500 text-white p-2 rounded"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
