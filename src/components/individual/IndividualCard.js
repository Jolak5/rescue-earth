import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './individualCard.css';
import { Back } from '../icon';

export default function IndividualCard() {
  const forex = useSelector((state) => state.Forex.forexItem);

  return (
    <div className="modal">
      <header className="header">
        <NavLink to="/"><Back /></NavLink>
        <h1>Global Covid 19 Stats</h1>
      </header>
      <div className="global individual">
        <div className="global-details stats">
          {forex.map((item) => (
            <article className="article" key={item.id}>
              <div>
                <h1>
                  {item.id}
                </h1>
                <p>
                  Confirmed cases:
                  <p>{item.Deaths}</p>

                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      {forex.map((item) => (

        <div key={item.Death}>
          <ul className="individual-item">
            <li>
              Confirmed cases
              {' '}
              <p>{item.confirmed}</p>
            </li>
            <li>
              Total deaths
              {' '}
              <p>{item.Deaths}</p>
            </li>
            <li>
              Last_Updated
              {' '}
              <p>{item.Last_Update}</p>
            </li>
            <li>
              Fatality rate:
              {' '}
              <p>{item.Fatality}</p>

            </li>

          </ul>
        </div>
      ))}
    </div>
  );
}
