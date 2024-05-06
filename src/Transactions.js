// Transactions.js
import React from 'react';

function Transactions({ transactions, onPageChange }) {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>{transaction.productTitle}</li>
        ))}
      </ul>
      {/* Pagination */}
      {/* Implement pagination logic here */}
      <button onClick={() => onPageChange(1)}>Previous</button>
      <button onClick={() => onPageChange(2)}>Next</button>
    </div>
  );
}

export default Transactions;
