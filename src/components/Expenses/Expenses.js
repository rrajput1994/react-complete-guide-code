import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");

  const onSelectFilter = (selectedYear) => {
    setSelectedYear(selectedYear);
    // console.log(selectedYear);
  };

  const filterExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  // another way to conditional rendering

  // let expenseContent = <p>No Expenses Fond</p>;

  // if (filterExpense.length > 0) {
  //   expenseContent = filterExpense.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={selectedYear}
          onSelectFilterProps={onSelectFilter}
        />

        <ExpensesList filterExpenses={filterExpense} />

        {/* {expenseContent} */}

        {/* one way to conditional rendering */}

        {/* {filterExpense.length === 0 ? (
          <p>No Expenses Found!</p>
        ) : (
          filterExpense.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )} */}
      </Card>
    </div>
  );
}

export default Expenses;
