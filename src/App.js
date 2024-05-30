import React from 'react';
import { HistoryProvider } from './Context/HistoryContext';
import Calculator from './Components/Calculator';
import History from './Components/History';
import './App.css';

function App() {
  return (
    <HistoryProvider>
      <div className="App">
        <Calculator />
        <History />
      </div>
    </HistoryProvider>
  );
}

export default App;
