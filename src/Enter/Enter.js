import React from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/react-modal-video/scss/modal-video.scss'
import './App.css'
import eyeSiteTitle from './img/black.png'
import eyeSiteTitlePink from './img/hotpink-title.png'

class App extends React.Component {
    render () {
      return (
        <div>
        <header>
        <title>EYE SITE</title>
        </header>
        <div className="imageBox">
        <Link to={'/videos'}>
					<div class="imageInn">
          <img src={eyeSiteTitle} alt="Eye Site" className='title-img' />
					</div>
					<div class="hoverImg">
          <img src={eyeSiteTitlePink} alt="Eye Site Pink" className='title-img' />
          <h1 className='sore-eyes'>A Site For Sore Eyes</h1>
					</div>
          </Link>
		</div>
        </div>
    )}
}

export default App;