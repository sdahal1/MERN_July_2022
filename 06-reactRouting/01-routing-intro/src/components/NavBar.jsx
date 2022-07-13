import React from 'react';

import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/aboutus">About Us</Link></li>
      <li><Link to="/players">Players</Link></li>
      <li><a href="/teams">Teams</a></li>
    </ul>
  );
};

export default NavBar;
