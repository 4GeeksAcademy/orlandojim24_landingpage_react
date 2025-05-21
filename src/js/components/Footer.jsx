import React from 'react';

const Footer = () => {
  return (
    <div className='navbar-dark bg-dark p-3'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-2'>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
    <footer className='text-center text-white mt-3'>
      <p>Orlando Jimenez - 2025</p>
    </footer>
  </div>
);
};

export default Footer;