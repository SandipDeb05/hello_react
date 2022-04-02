import Expenses from "./components/Expenses";

import "./App.css";

function App() {
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

  return (
    <div>
      <h2>Hey Sandip, Happy Learning 👋</h2>
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
