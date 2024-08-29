const Expense = require('../models/Expense');

// Add a new expense
const addExpense = async (req, res) => {
  try {
    const { amount, category, date } = req.body;
    const newExpense = new Expense({ amount, category, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add expense' });
  }
};

// Update an existing expense
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedExpense) return res.status(404).json({ error: 'Expense not found' });
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update expense' });
  }
};

// Get expenses by category
const getExpensesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const expenses = await Expense.find({ category });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
};

// Get all expenses
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
};

module.exports = {
  addExpense,
  updateExpense,
  getExpensesByCategory,
  getAllExpenses
};
