import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { openSearch } from '../../redux/search/searchSlice';
import './Navbar.css';

export default function Navbar() {
  const dispatch = useDispatch();

  function handleSearch() {
    dispatch(openSearch());
  }

  return (
    <div>
      <nav>

        <img src="" alt="Logo" />
        <button type="button" onClick={handleSearch}>open search</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>

  );
}
