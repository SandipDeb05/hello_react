import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map((el) => {
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
  );
};

export default Expenses;
