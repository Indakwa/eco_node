import React from 'react';

const TransactionHistoryTable = () => {
  return (
    <table className="transaction-history-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Action</th>
          <th>Address</th>
          <th>Tokens</th>
          <th>Profit/loss</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2024-01-25</td>
          <td>Earned</td>
          <td>GI83 HUU8 4ERG</td>
          <td>50</td>
          <td>+15%</td>
        </tr>
        <tr>
          <td>2024-01-24</td>
          <td>Transfer</td>
          <td>N0G2 I78Q KJ8H</td>
          <td>20</td>
          <td>-8%</td>
        </tr>
        <tr>
          <td>2024-01-23</td>
          <td>Earned</td>
          <td>PYT7 33DCF 8UYT</td>
          <td>63</td>
          <td>+22%</td>
        </tr>
        <tr>
          <td>2024-01-22</td>
          <td>Earned</td>
          <td>FF1D IC4I CMFH</td>
          <td>55</td>
          <td>+25%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionHistoryTable;
