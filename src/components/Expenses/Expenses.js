import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");

  const onSelectFilter = (selectedYear) => {
    setSelectedYear(selectedYear);
    // console.log(selectedYear);
  };

  const filterExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={selectedYear}
          onSelectFilterProps={onSelectFilter}
        />

        <ExpenseChart expenses={filterExpense} />

        <ExpensesList filterExpenses={filterExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
