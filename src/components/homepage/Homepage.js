import React from 'react';
import './Homepage.css';
import { useSelector } from 'react-redux';

export default function Homepage() {
  const forexList = useSelector((state) => state.Forex.Forex);
  const newForex = forexList.slice(0, 10);
  return (
    <div>
      {newForex.map((forex) => (
        <div key={forex.id}>
          <h2>{forex.ticker}</h2>
          <p>{forex.bid}</p>
        </div>
      ))}
    </div>
  );
}
