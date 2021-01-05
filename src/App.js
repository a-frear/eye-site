import React from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav/Nav'
import '../node_modules/react-modal-video/scss/modal-video.scss'
import './App.css'
import Videos from './Videos/Videos'
import About from './About/About'
import Contact from './Contact/Contact'
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
         <Route
              exact path = '/'
              component={App}>
                <img src={rachelScreenshot} className='intro-image'/>
              </Route>
              <Route
              path = '/contact'
              component={Contact}/>
        <Link to={'/'}>
          <img src={eyeSiteLogo} alt='Eye Site Logo' className='logo' />
        </Link>
        </section>
       
      </div>
       
    )}
}

export default App;