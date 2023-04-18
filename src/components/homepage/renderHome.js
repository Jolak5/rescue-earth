import React from 'react';
import './Homepage.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { renderItem } from '../../redux/homepage/homepageSlice';
import Icon, { Search } from '../icon';

export default function RenderHome() {
  const dispatch = useDispatch();
  const covid = useSelector((state) => state.Forex.Forex);
  const global = useSelector((state) => state.Forex.Global);
  const { countryId } = useParams();
  const newCovid = covid.slice(0, 20);
  return (
    <div>
      <header className="header">
        <h1>CoviLab </h1>
        <NavLink to="search"><Search /></NavLink>

      </header>
      <div className="global">

        <div className="global-details stats">
          {global.map((item) => (
            <article className="article" key={item.id}>
              <div>
                <h1>
                  Global
                  {' '}
                  <br />
                  {' '}
                  Covid-19

                  Stats
                </h1>
                <p>
                  Confirmed cases:
                  {' '}
                  {item.confirmed}
                  <br />
                  Total deaths:
                  {' '}
                  {item.deaths}

                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="stats-countries">STATS BY COUNTRY</div>
      <div className="forex-container">

        {newCovid.map((item) => (
          <article className="eachItem" key={item.Deaths}>

            <div>
              <h2>{item.country}</h2>
              <p>
                {item.Deaths}
                {' '}
                deaths
              </p>
            </div>
            <NavLink to={countryId}>
              <button
                className="show-more"
                type="button"
                onClick={() => {
                  dispatch(renderItem(item.id));
                }}
              >
                <Icon />
              </button>
            </NavLink>
          </article>
        ))}
      </div>
    </div>
  );
}
