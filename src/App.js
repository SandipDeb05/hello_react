import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";
const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper ๐งป",
    amount: 94.12,
    date: new Date(2020, 1, 7),
  },
  {
    id: "e2",
    title: "Car Insurance ๐ฐ",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e3",
    title: "New TV ๐บ",
    amount: 799.49,
    date: new Date(2021, 4, 23),
  },
  {
    id: "e4",
    title: "Study Material ๐",
    amount: 300.23,
    date: new Date(2022, 5, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    // TODO Good practice of updating data
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  // TODO React JSX under the hood
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Hey Sandip, Happy Learning ๐"),
  //   React.createElement(Expenses, { expenses: expense })
  // );

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#fff" }}>
        Hey Sandip, Happy Learning ๐
      </h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
