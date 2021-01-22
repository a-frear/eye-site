import React from 'react'
import './About.css'
import rachelScreenshot from '../img/rachel-screenshot.png'

class About extends React.Component {
    render () {
        return (
            <section className='About'>
                <img src={rachelScreenshot} alt='eye-practice' className='about-img'/>
                <p> I had a dream that I was married to a one-eyed ogre and I was like, "Why am I married to you?" The ogre answered, "You're married to me because you wear a necklace with an eye on it which symbolizes my missing eye." At that point, I found the necklace and put it on. The ogre clapped and said, "There you go!!"
                </p>
            </section>
        )
    }
}

export default About