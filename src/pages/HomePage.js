import React, { useState, useEffect } from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';
import Header from '../components/Header';
import api from '../services/api';
import EditExpenseForm from '../components/EditExpenseForm';

const HomePage = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await api.get('/expenses');
        setExpenses(response.data);
      } catch (err) {
        setError('Error fetching expenses. Please try again later.');
      }
    };

    fetchExpenses();
  }, []);

  const handleAddExpense = async (expense) => {
    try {
      const response = await api.post('/expenses', expense);
      setExpenses([...expenses, response.data]);
    } catch (err) {
      setError('Error adding expense. Please try again later.');
    }
  };

  const handleUpdateExpense = async (updatedExpense) => {
    try {
      const response = await api.put(`/expenses/${updatedExpense._id}`, updatedExpense);
      setExpenses(expenses.map(exp => (exp._id === response.data._id ? response.data : exp)));
      setEditingExpense(null);
    } catch (err) {
      setError('Error updating expense. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center w-96">
      <Header />
      {error && <p className="text-red-500">{error}</p>}
      <AddExpenseForm onAddExpense={handleAddExpense} />
      {editingExpense && (
        <EditExpenseForm
          expense={editingExpense}
          onUpdateExpense={handleUpdateExpense}
        />
      )}
      <ExpenseSummary expenses={expenses} />
      <ExpenseList
        expenses={expenses}
        onEditExpense={setEditingExpense}
      />
    </div>
  );
};

export default HomePage;
