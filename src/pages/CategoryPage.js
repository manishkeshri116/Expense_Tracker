import React, { useState, useEffect } from 'react';
import ExpenseList from '../components/ExpenseList';
import Header from '../components/Header';
import api from '../services/api';

const CategoryPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (category) {
      const fetchExpensesByCategory = async () => {
        const response = await api.get(`/expenses/category/${category}`);
        setExpenses(response.data);
      };

      fetchExpensesByCategory();
    }
  }, [category]);

  return (
    <div className="w-96 ">
      <Header />
      <div className="mt-6 ">
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
          className="border w-96 p-3 text-white  bg-gray-700 rounded-2xl"
        />
      </div>
      <ExpenseList expenses={expenses} onEditExpense={() => {}} />
    </div>
  );
};

export default CategoryPage;
