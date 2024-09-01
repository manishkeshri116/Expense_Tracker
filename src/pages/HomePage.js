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

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await api.get('/expenses');
      setExpenses(response.data);
    };

    fetchExpenses();
  }, []);

  const handleAddExpense = async (expense) => {
    const response = await api.post('/expenses', expense);
    setExpenses([...expenses, response.data]);
  };

  const handleUpdateExpense = async (updatedExpense) => {
    const response = await api.put(`/expenses/${updatedExpense._id}`, updatedExpense);
    setExpenses(expenses.map(exp => (exp._id === response.data._id ? response.data : exp)));
    setEditingExpense(null);
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center w-96">
      <Header />
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
