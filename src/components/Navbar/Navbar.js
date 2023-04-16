import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { openSearch } from '../../redux/search/searchSlice';

export default function Navbar() {
  const dispatch = useDispatch();

  function handleSearch() {
    dispatch(openSearch());
  }

  return (
    <div>
      <button type="button" onClick={handleSearch}>open search</button>
      <header>
        <a className="logo" href="/">Logo</a>
        <nav>
          <NavLink to="homepage">Homepage</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>

  );
}
