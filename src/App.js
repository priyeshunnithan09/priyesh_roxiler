import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import TransactionsTable from './TransactionsTable';
import TransactionsStatistics from './TransactionsStatistics';
import TransactionsBarChart from './TransactionsBarChart';
import './App.css';

function App() {
  const [month, setMonth] = useState('March');
  const [searchText, setSearchText] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const [transactionsRes, statisticsRes, barChartRes] = await Promise.all([
        axios.get(`/transactions?month=${month}&search=${searchText}`),
        axios.get(`/statistics?month=${month}`),
        axios.get(`/bar-chart?month=${month}`)
      ]);
      setTransactions(transactionsRes.data.transactions);
      setStatistics(statisticsRes.data);
      setBarChartData(barChartRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [month, searchText]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container">
      <h1>Transaction Dashboard</h1>
      <div className="dropdown">
        <label>Select Month:</label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          {/* Options for month selection */}
        </select>
      </div>
      <div className="search-box">
        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search Transaction" />
      </div>
      <TransactionsTable transactions={transactions} />
      <TransactionsStatistics statistics={statistics} />
      <TransactionsBarChart data={barChartData} />
    </div>
  );
}

export default App;
