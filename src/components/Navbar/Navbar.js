import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <form action="#">
        <input type="text" id="kayode" placeholder="kayode" />
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
