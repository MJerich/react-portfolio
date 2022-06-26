import React from 'react';


function Header(props) {

  return (
    <header>
      <h1>Matthew Jerich</h1>
      <ul id='nav'>
        <li>
          <a href='#about-me'>About me</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact-section'>Contact</a>
        </li>
        <li>
          <a href='#resume'>Resume</a>
        </li>
      </ul>
    </header>
  )
}

export default Header;