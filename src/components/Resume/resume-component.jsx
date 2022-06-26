import React from 'react';

const Resume = () => {
  return (
    <div id='resume'>
      <h2>
        Resume
      </h2>
      <h3>
        <a href={require("../../assets/MatthewJerichResume.pdf")} id='download'>Download my Resume</a>
      </h3>
      <div>
        <h4>Front-end Proficiencies</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h4>Back-end Proficiencies</h4>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume;