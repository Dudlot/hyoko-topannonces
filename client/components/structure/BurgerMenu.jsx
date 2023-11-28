import React, { useState } from 'react';


const BurgerMenu = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className="burger-menu">
        <div className={`burger-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="39.822" height="27.548" viewBox="0 0 39.822 27.548">
                <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-3 -7.5)">
                    <path id="Tracé_55" data-name="Tracé 55" d="M4.5,18H41.322" transform="translate(0 3.274)" fill="none" stroke="#1801ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Tracé_56" data-name="Tracé 56" d="M4.5,9H41.322" fill="none" stroke="#1801ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Tracé_57" data-name="Tracé 57" d="M4.5,27H41.322" transform="translate(0 6.548)" fill="none" stroke="#1801ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </g>
            </svg>
        </div>
  
        {isSidebarOpen && (
          <div className="sidebar">
            <a href="/" onClick={toggleSidebar}>Accueil</a>
            <a href="/about" onClick={toggleSidebar}>À propos</a>
            <a href="/contact" onClick={toggleSidebar}>Contact</a>
          </div>
        )}
      </div>
    );
  };
  
export default BurgerMenu;