import React from 'react'
import './About.css'
import rachelScreenshot from '../img/rachel-screenshot.png'

class About extends React.Component {
    render () {
        return (
            <section className='About'>
                <img src={rachelScreenshot} alt='eye-practice' className='about-img'/>
                <p className='about-paragraph'><br/> I had a dream that I was married to a one-eyed ogre and I was like, "Why am I married to you?" The ogre answered, "You're married to me because you wear a necklace with an eye on it which symbolizes my missing eye." At that point, I found the necklace and put it on. The ogre clapped and said, "There you go!!"
                <br/>
                <br/>
                -Iva Yos
                <br/>
                <br/>
                </p>
                <p className='about-paragraph'><br/>I know it’s been a rough year for everyone, but I can’t help but notice that no one has checked in on me. To begin with, I’m never seen as an individual. Always a pair. But I’m my own eye. I have my own needs, my own dreams, my own life. Also, I’m always the one expected to be doing the seeing, but I can’t even remember the last time anyone saw me. Like, ACTUALLY saw me. And I was feeling all of this before 2020! This year my workload has been double. Mouth and nose aren’t allowed to be seen in public anymore. So I’ve been doing double duty in terms of seeing and expressing. People are relying on me for a smile instead of mouth, and I don’t even know if I’m doing a good job at it most of the time. It’s been rough. At home, my tear ducts are working over time, there is so much to cry about, I didn’t know I could produce so many tears but obviously I can and nothing about this year is giving me a break.
                <br/>
                <br/>
                Eye Site is a website I can go to that is just for ME. Where I can be not only seen, but heard! And felt. It makes me feel less alone.
                <br/>
                <br/>
                -Anonymous Eye  
                <br/>
                <br/>
                </p>
                <p>Eye Site is a creation of Amy Frear, Iva Yos, and Matthew Ober.</p>
            </section>
        )
    }
}

export default About