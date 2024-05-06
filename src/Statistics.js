// Statistics.js
import React from 'react';

function Statistics({ statistics }) {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Sale Amount: {statistics.total_sale_amount}</p>
      <p>Sold Items Count: {statistics.sold_items_count}</p>
      <p>Not Sold Items Count: {statistics.not_sold_items_count}</p>
    </div>
  );
}

export default Statistics;
