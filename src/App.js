import React,{useState} from 'react'
import { Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import Nav from './Nav/Nav'
import '../node_modules/react-modal-video/scss/modal-video.scss'
import './App.css'
import Videos from './Videos/Videos'
import About from './About/About'
import eyeSiteLogo from './img/eyesite3.png'
import rachelScreenshot from './img/rachel-screenshot.png'
 
class App extends React.Component {
    render () {
      return (
      <div>
        <Nav />
        <section>
        <Route
              path='/about'
              component={About}/>
        <Route
              path='/videos'
              component={Videos}/>
        <Link to={'/'}>
          <img src={eyeSiteLogo} alt='Eye Site Logo' className='logo' />
        </Link>
        <Route
              exact path = '/'
              component={App}>
                <img src={rachelScreenshot} className='intro-image'/>
              </Route>
        </section>
       
      </div>
       
    )}
}

export default App;