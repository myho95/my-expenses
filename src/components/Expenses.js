import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <div className="expenses">
      {expenses.map((value) => (
        <ExpenseItems
          key={value.id}
          title={value.title}
          amount={value.amount}
          date={value.date}
        />
      ))}
    </div>
  );
}
export default Expenses;
