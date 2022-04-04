import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const { expenses } = props;
  const [expenseFilterData, setExpenseFilterData] = useState(2020);

  const expenseFilterHandler = (selectedYear) => {
    setExpenseFilterData(selectedYear * 1);
  };
  const filteredData = expenses.filter((el) => {
    return el.date.getFullYear() === expenseFilterData;
  });

  // TODO Keep your return JSX clean and simple
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={expenseFilterHandler}
          selected={expenseFilterData}
        />

        <ExpensesChart expenses={filteredData} />
        <ExpensesList filteredData={filteredData} />
      </Card>
    </div>
  );
};

export default Expenses;
