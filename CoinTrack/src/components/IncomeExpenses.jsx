import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const positive = transactions.filter(transaction => transaction.amount > 0);
  const negative = transactions.filter(transaction => transaction.amount < 0);
  const posTotal = positive.reduce((acc, item) => (acc + item.amount),0).toFixed(2);
  let negTotal = negative.reduce((acc, item) => (acc + item.amount),0).toFixed(2);
  negTotal *= -1;
  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className='money plus'>+${posTotal}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>-${negTotal}</p>
        </div>
    </div>
    
  )
}
