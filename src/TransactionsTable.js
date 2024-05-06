// TransactionsTable.js
import React from 'react';

function TransactionsTable({ transactions, fetchData }) {
  const handleNextPage = () => {
    // Implement next page logic here
  };

  const handlePrevPage = () => {
    // Implement previous page logic here
  };

  return (
    <div className="transactions-table">
      <h2>Transactions Table</h2>
      <table>
        <thead>
          <tr>
            <th>Product Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.productTitle}</td>
              <td>{transaction.productDescription}</td>
              <td>{transaction.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}

export default TransactionsTable;
