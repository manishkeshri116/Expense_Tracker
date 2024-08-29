const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Route to get all expenses
router.get('/expenses', expenseController.getAllExpenses);

// Route to get expenses by category
router.get('/expenses/category/:category', expenseController.getExpensesByCategory);

// Route to add a new expense
router.post('/expenses', expenseController.addExpense);

// Route to update an existing expense
router.put('/expenses/:id', expenseController.updateExpense);

module.exports = router;
