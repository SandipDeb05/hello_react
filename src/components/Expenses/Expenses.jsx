import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const { expenses } = props;
  const [expenseFilterData, setExpenseFilterData] = useState(2020);

  const expenseFilterHandler = (selectedYear) => {
    setExpenseFilterData(selectedYear * 1);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={expenseFilterHandler}
          selected={expenseFilterData}
        />

        {expenses
          .filter((el) => {
            return el.date.getFullYear() === expenseFilterData;
          })
          .map((el) => {
            return (
              <ExpenseItem
                key={el.id}
                title={el.title}
                amount={el.amount}
                date={el.date}
              />
            );
          })}
      </Card>
    </div>
  );
};

export default Expenses;
