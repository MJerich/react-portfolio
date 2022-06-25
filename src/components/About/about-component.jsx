import React from 'react';



const About = () => {
  return (
    <div id='about-me'>
      <h2>
        About me
      </h2>
      <img src={require("../../assets/headshot.jpg")} alt="Headshot" id="headshot" />
      <p>
      I am a full stack web developer with a well rounded skill set, being proficient in both the front and back end. 
      I am currently on course to graduate from the Michigan State University coding bootcamp in July 2022. 
      I am experienced in HTML, CSS, JavaScript, and Node.js. I have built several full stack projects both on my own 
      and as part of a team. I am very excited to continue learning and sharpening my skills to build and maintain exciting products.
      </p>
    </div>
  )
}

export default About;