import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");

  const onSelectFilter = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={selectedYear}
          onSelectFilterProps={onSelectFilter}
        />
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
