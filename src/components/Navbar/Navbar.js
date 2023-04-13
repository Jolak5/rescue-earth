import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <header>
        <a className="logo" href="/">Logo</a>
        <nav>
          <NavLink to="/">Homepage</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>

  );
}
