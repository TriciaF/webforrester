import React from 'react';
import NavBar from './Nav-Bar';

class About extends React.Component {
  render() {

    return(
      <div>
        <NavBar />
        <section className='section section-resume'>
          <h2>Resume:</h2>
            {/* <object data='../images/PForrester.mht' width='400' height='400'>PForrester_Resume</object> */}
            {/* <img src='../images/PForrester_Infographic_Resume.png' height='980' width='700' border='1px solid black'/> */}
        </section> 
      </div>
    )
  }
}

export default About;

