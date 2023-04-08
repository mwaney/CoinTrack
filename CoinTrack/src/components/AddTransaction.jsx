import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const handleTextChange = (e) => setText(e.currentTarget.value);
    const handleAmountChange = (e) => setAmount(e.currentTarget.value);
    const onSubmit = (e) => {
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text: text,
            amount: +amount,
        }
        addTransaction(newTransaction);
    }
  return (
    <>
    <h3>Add New Transaction</h3>
    <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={handleTextChange} placeholder='Enter text...'/>
        </div>
        <div className="form-control">
            <label htmlFor="amount">
                Amount <br />
                (negative - expense, positive - income)
            </label>
            <input type="number" value={amount} onChange={handleAmountChange} name="" id="" placeholder='Enter Amount...' />
        </div>
        <button className="btn">Add Transaction</button>
    </form>
    </>
  )
}
