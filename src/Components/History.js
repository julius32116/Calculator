import React, { useContext } from 'react';
import { HistoryContext } from '../Context/HistoryContext';

const History = () => {
  const { history } = useContext(HistoryContext);

  return (
    <div>
      <h2>Calculation History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
