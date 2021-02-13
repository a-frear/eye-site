import React from "react";
import "./About.css";
// import rachelStill from "../img/rachel-eye-date.png";

class About extends React.Component {
  render() {
    return (
      <section className="About">
        {/* <img src={rachelStill} alt="eye-practice" className="about-img"/> */}
        <p className="about-paragraph">
          "I’m never seen as an individual. Always a pair. But I’m my own eye. I have my own
          needs, my own dreams, my own life. I’m always the one expected
          to be doing the seeing, but I can’t even remember the last time anyone
          saw me. Like, ACTUALLY saw me. 
          <br />
          <br />
          And I was feeling all of this before
          2020! This year my workload has been double. Mouth and nose aren’t
          allowed to be seen in public anymore. So I’ve been doing double duty
          in terms of seeing and expressing. People are relying on me for a
          smile instead of mouth, and I don’t even know if I’m doing a good job
          at it most of the time. It’s been rough. At home, my tear ducts are
          working over time, there is so much to cry about, I didn’t know I
          could produce so many tears but obviously I can and nothing about this
          year is giving me a break.
          <br />
          <br />
          Eye Site is a website I can go to that is just for me. Where I can be
          not only seen, but heard! And felt. It makes me feel less alone."
          <br />
          <br />
          <em className='name'>-Anonymous Eye</em>
          <br />
          <br />
        </p>
      </section>
    );
  }
}

export default About;
