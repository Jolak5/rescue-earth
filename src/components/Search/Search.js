import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { filterItem } from '../../redux/homepage/homepageSlice';
import Icon, { Back } from '../icon';

// Render search
export default function Search() {
  const dispatch = useDispatch('');
  const searchFilter = useSelector((state) => state.Forex.searchFilter);
  const global = useSelector((state) => state.Forex.Global);

  const [filter, setfilter] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(filterItem(filter));
    setfilter('');
  }

  return (
    <Container>
      <header className="search-header">
        <NavLink to="/"><Back /></NavLink>
        <h1>CoviLab </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" id="kayode" value={filter} onChange={(e) => setfilter(e.target.value)} placeholder="country name" />
          <input className="submit" type="submit" placeholder="submit" />
        </form>
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
                  {' '}
                  Covid19 Stats

                </h1>
                <p>
                  Confirmed cases:
                  {' '}
                  {item.confirmed}
                </p>
                <p>
                  Total deaths:
                  {' '}
                  {item.deaths}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="forex-container">
        {searchFilter.map((item) => (
          <article className="eachItem" key={item.Deaths}>
            <div>
              <h2>{item.country}</h2>
              <p>{item.Deaths}</p>
            </div>
            <NavLink to="country"><Icon /></NavLink>

          </article>
        ))}
      </div>
    </Container>
  );
}
