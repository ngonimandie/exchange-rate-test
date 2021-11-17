import React, {useState, useEffect} from 'react'
import logo from '../logo.svg';

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);
    return (
      // navbar fixed-top navbar-expand-lg navbar-dark p-md-3
       
      <nav id="top" class={scrollNav ? 'navbar fixed-top navbar-expand-lg navbar-dark p-md-3 shadow bg-light text-dark' : 'navbar fixed-top navbar-expand-lg navbar-dark p-md-3'}>
      <div class="container">
        <a class="navbar-brand" href="/">
            <img src={scrollNav ? logo:logo }  alt="afrosoft" className="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class={ scrollNav ?  'nav-link text-dark' : 'nav-link text-white'} href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class={ scrollNav ?  'nav-link text-dark' : 'nav-link text-white'} href="/about">About </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar
