import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Football Blog
      </Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
        <Link className="nav-link" to="/admin">
          Admin
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
