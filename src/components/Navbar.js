import React from 'react';
const Navbar = ({ setPage }) => {
  return (
    <nav className="list-option">
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('people')}>People</button>
    </nav>
  );
};
export default Navbar;
