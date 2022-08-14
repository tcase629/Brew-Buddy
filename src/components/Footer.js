import React from 'react'

export default function Footer() {
  return (
    <nav className="mobile-nav">
      <ul>
        <li>
          <a href="/abv" className="icon">
            <img src="images/brew.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/diluteandboil" className="icon">
            <img src="images/hops.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/gravity" className="icon">
            <img src="images/keg.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/hydrometer" className="icon">
            <img src="images/pot.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/strikewater" className="icon">
            <img src="images/wheat.png" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

