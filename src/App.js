import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'New Laptop',
    amount: 49640,
    date: new Date(2021, 6, 17),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'New Mobile',
    amount: 8500,
    date: new Date(2020, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 2000,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Refrigerator',
    amount: 14600,
    date: new Date(2019, 2, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
