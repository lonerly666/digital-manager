import { useState, useEffect } from 'react';
import burgerIcon from '../../assets/burger.svg';
import crossIcon from '../../assets/cross.svg';

export default function Menu(props) {
  const { openMenu, setOpenMenu } = props;

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.menu');
      if (menu && !menu.contains(event.target) && openMenu) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenu, setOpenMenu]);

  // Open and close the menu
  useEffect(() => {
    const menu = document.querySelector('.menu');
    if (openMenu) {
      menu.style.left = 0;
    } else {
      menu.style.left = '-20em';
    }
    return () =>{
      menu.style.left = '-20em'; 
    }
  }, [openMenu]);

  return (
    <div className="menu-container">
      <button className="burger-btn">
        <img src={burgerIcon} onClick={() => setOpenMenu(true)} />
      </button>
      <nav className="menu">
        <div className="menu-btn">
          <button onClick={() => setOpenMenu(false)}>
            <img src={crossIcon} />
          </button>
        </div>
        <div className="menu-links">
          <a href="/">Home</a>
        </div>
        <div className="menu-links">
          <a href="/">Settings</a>
        </div>
        <div className="menu-links">
          <a href="/">Summary</a>
        </div>
      </nav>
    </div>
  );
}
