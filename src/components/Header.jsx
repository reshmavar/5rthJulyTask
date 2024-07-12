import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h6>Welcome, Guest</h6>
        <nav className='navbar ml-5'>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </nav>
      </div>
        <div className="header-right">
        <div className="header-updated">
          Stay Updated: <a href="/subscribe">Subscribe</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
