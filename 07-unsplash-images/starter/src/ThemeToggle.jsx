import React from 'react';
import { useGlobalContext } from './contex';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={() => toggleDarkTheme()}>
        {isDarkTheme ? (
          <FaSun className='toggle-icon' />
        ) : (
          <FaMoon className='toggle-icon' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
