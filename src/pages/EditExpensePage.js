import React, { useState, useEffect } from 'react';
import EditExpenseForm from '../components/EditExpenseForm';
import Header from '../components/Header';
import api from '../services/api';

const EditExpensePage = ({ match }) => {
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const fetchExpense = async () => {
      const response = await api.get(`/expenses/${match.params.id}`);
      setExpense(response.data);
    };

    fetchExpense();
  }, [match.params.id]);

  const handleUpdateExpense = async (updatedExpense) => {
    await api.put(`/expenses/${updatedExpense._id}`, updatedExpense);
    // Redirect or update UI after update
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      {expense && (
        <EditExpenseForm
          expense={expense}
          onUpdateExpense={handleUpdateExpense}
        />
      )}
    </div>
  );
};

export default EditExpensePage;
