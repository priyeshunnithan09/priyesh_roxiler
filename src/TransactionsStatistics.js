// TransactionsStatistics.js
import React from 'react';

function TransactionsStatistics({ statistics }) {
  return (
    <div className="statistics">
      <h2>Transactions Statistics</h2>
      <div>
        <p>Total Sale Amount: {statistics.total_sale_amount}</p>
        <p>Sold Items Count: {statistics.sold_items_count}</p>
        <p>Not Sold Items Count: {statistics.not_sold_items_count}</p>
      </div>
    </div>
  );
}

export default TransactionsStatistics;
