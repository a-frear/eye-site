import React from 'react'
import { Link, Route } from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {
  return (
    <nav className='Nav'>
      <Link to={'/videos'} className='link'>
        Videos
      </Link>
      {' '}
      {' '}
      <Link to={'/about'} className='link'>
        Why
      </Link>
      {' '}
      <Link to={'/contact'} className='link'>
        Contact
      </Link>
    </nav>
  );
}

