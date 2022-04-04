import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const { filteredData } = props;

  if (filteredData.length === 0) {
    return (
      <h2 className="expenses-list__fallback ">No Expense Available 🤷‍♂️</h2>
    );
  }
  return (
    <ul className="expenses-list">
      {filteredData.map((el) => {
        return (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
