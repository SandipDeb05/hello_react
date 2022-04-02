import React from "react";
import Expenses from "./components/Expenses/Expenses";

import "./App.css";

const App = () => {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper 🧻",
      amount: 94.12,
      date: new Date(2020, 1, 7),
    },
    {
      id: "e2",
      title: "Car Insurance 💰",
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e3",
      title: "New TV 📺",
      amount: 799.49,
      date: new Date(2021, 4, 23),
    },
    {
      id: "e4",
      title: "Study Material 📚",
      amount: 300.23,
      date: new Date(2022, 5, 14),
    },
  ];

  // TODO React JSX under the hood
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Hey Sandip, Happy Learning 👋"),
  //   React.createElement(Expenses, { expenses: expense })
  // );

  return (
    <div>
      <h2>Hey Sandip, Happy Learning 👋</h2>
      <Expenses expenses={expense} />
    </div>
  );
};

export default App;
