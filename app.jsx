import React, { useState } from 'react';
import 'App.css';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState('');
  const [initialBalance, setInitialBalance] = useState('');
  const [fromAccountId, setFromAccountId] = useState('');
  const [toAccountId, setToAccountId] = useState('');
  const [amount, setAmount] = useState('');

  const createAccount = () => {
    const newAccount = {
      id: accounts.length + 1,
      name,
      balance: parseFloat(initialBalance),
    };
    setAccounts([...accounts, newAccount]);
    setName('');
    setInitialBalance('');
  };

  const transferFunds = () => {
    const fromAccount = accounts.find(acc => acc.id === parseInt(fromAccountId));
    const toAccount = accounts.find(acc => acc.id === parseInt(toAccountId));
    
    if (fromAccount && toAccount && fromAccount.balance >= parseFloat(amount)) {
      fromAccount.balance -= parseFloat(amount);
      toAccount.balance += parseFloat(amount);
      setAccounts([...accounts]);
      setFromAccountId('');
      setToAccountId('');
      setAmount('');
    } else {
      alert('Invalid transaction');
    }
  };

  return (
    <div className="container">
      <h1>Bank Accounts</h1>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>
            ID: {account.id}, Name: {account.name}, Balance: ${account.balance.toFixed(2)}
          </li>
        ))}
      </ul>
      <h2>Create Account</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Initial Balance" 
        value={initialBalance} 
        onChange={(e) => setInitialBalance(e.target.value)} 
      />
      <button onClick={createAccount}>Create Account</button>

      <h2>Transfer Funds</h2>
      <input 
        type="number" 
        placeholder="From Account ID" 
        value={fromAccountId} 
        onChange={(e) => setFromAccountId(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="To Account ID" 
        value={toAccountId} 
        onChange={(e) => setToAccountId(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button onClick={transferFunds}>Transfer Funds</button>
    </div>
  );
}

export default App;
