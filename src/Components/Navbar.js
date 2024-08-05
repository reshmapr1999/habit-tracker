import React from 'react';
import { Link } from 'react-router-dom';


import "./navbar.css";
//Navbar
function Navbar() {
   
  const currentDate = new Date();

       return (
    <nav className='navbar  '>
      
        <div className='right'>
            Habit Tracker
        </div>
        <div className='left'>
            <div className='home'>
                <Link to='/' style={{ textDecoration: 'none',color:'white' }}>Home</Link>
            </div>
            <div className='Date'>{currentDate.toDateString()}</div>
        </div>
    </nav>
       )
    
}

export default Navbar
