import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
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
}

export default Expenses;
