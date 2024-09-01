import React from 'react';

const ExpenseList = ({ expenses, onEditExpense }) => {
  return (
    <ul className="flex flex-col items-center justify-center  p-0">
      {expenses.map(expense => (
        <li key={expense._id} className="border-b p-4 flex w-96  rounded-2xl shadow-2xl justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">₹{expense.amount}</h3>
            <p className="text-black">{expense.category}</p>
            <p className="text-black">{new Date(expense.date).toLocaleDateString()}</p>
          </div>
          <button
            onClick={() => onEditExpense(expense)}
            className="bg-yellow-400 rounded-xl p-4 text-black  font-medium"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
