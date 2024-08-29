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
    <div className="container mx-auto p-4">
      <Header />
      <div className="mb-4">
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
          className="border p-2 rounded"
        />
      </div>
      <ExpenseList expenses={expenses} onEditExpense={() => {}} />
    </div>
  );
};

export default CategoryPage;
