import { useState } from "react";
import "./ExpenseForm.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormActive(false);
  };

  const [isFormActive, setIsFormActive] = useState(false);
  const renderExpenseFormHandler = () => {
    setIsFormActive(true);
  };
  const cancelHandler = () => {
    setIsFormActive(false);
  };

  return (
    <div className="new-expense">
      {!isFormActive && (
        <button onClick={renderExpenseFormHandler}>Add New Expense</button>
      )}
      {isFormActive && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
