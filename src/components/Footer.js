import React from 'react'

export default function Footer() {
  return (
    <nav className="mobile-nav">
      <ul>
        <li>
          <a href="/calc1" className="icon">
            <img src="images/brew.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/calc2" className="icon">
            <img src="images/hops.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/calc3" className="icon">
            <img src="images/keg.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/calc4" className="icon">
            <img src="images/pot.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/calc5" className="icon">
            <img src="images/wheat.png" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

