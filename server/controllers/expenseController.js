const Expense = require('../models/Expense'); // Adjust the path to your Expense model

// Get all expenses
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find(); // Fetch all expenses from the database
    res.status(200).json(expenses); // Send the expenses as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
};

// Get expenses by category
const getExpensesByCategory = async (req, res) => {
  try {
    const { category } = req.params; // Get the category from the route parameters
    const expenses = await Expense.find({ category }); // Fetch expenses by category
    res.status(200).json(expenses); // Send the expenses as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses by category', error });
  }
};

// Add a new expense
const addExpense = async (req, res) => {
  try {
    const newExpense = new Expense(req.body); // Create a new expense instance
    await newExpense.save(); // Save the new expense to the database
    res.status(201).json(newExpense); // Send the newly created expense as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error adding expense', error });
  }
};

// Update an existing expense
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params; // Get the expense ID from the route parameters
    const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, { new: true }); // Update the expense
    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' }); // Handle case where expense is not found
    }
    res.status(200).json(updatedExpense); // Send the updated expense as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error updating expense', error });
  }
};

module.exports = {
  getAllExpenses,
  getExpensesByCategory,
  addExpense,
  updateExpense,
};
