import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { filterItem } from '../../redux/homepage/homepageSlice';
import { openSearch } from '../../redux/search/searchSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const [filter, setfilter] = useState('');
  function handleFilter(e) {
    e.preventDefault();
    dispatch(filterItem(filter));
    setfilter('');
  }

  function handleChange(e) {
    e.preventDefault();
    setfilter(e.target.value);
    dispatch(openSearch());
  }

  return (
    <div>
      <form onSubmit={handleFilter}>
        <input type="text" id="kayode" value={filter} onChange={handleChange} placeholder="country name" />
        <input type="submit" placeholder="submit" />
      </form>
      <header>
        <a className="logo" href="/">Logo</a>
        <nav>
          <NavLink to="homepage">Homepage</NavLink>
          <NavLink to="items">Navbar</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>

  );
}
