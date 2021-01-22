import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {
  return (
    <nav className='Nav'>
       <Link to={'/'} className='link'>
        VIDEOS
      </Link>
      <Link to={'/about'} className='link'>
        WHY
      </Link>
      {' '}
      <Link to={'/submit'} className='link'>
        SUBMIT
      </Link>
      {' '}
      <Link to={'/contact'} className='link'>
        CONTACT
      </Link>
      <Link to={'/login'} className='link'>
        LOG IN
      </Link>
    </nav>
  );
}

