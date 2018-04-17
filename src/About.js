import React from 'react';
import NavBar from './Nav-Bar';

class About extends React.Component {
  render() {

    return(
      <div>
       <div id='about'>
       </div>
       <div>
         <h1 className='page-title'>About</h1>
      </div>
      <div id='tricia-img'><img src='../images/PForrester.jpg' alt='Tricia picture'height='260px' width='260px'/></div>
      <div className='about-desc'>
      <div className='about-desc-paragraph'>My name is Patricia Forrester, but please call me Tricia.  I am an experienced software developer with technical skills ranging from embedded C++ to full-stack web development.  In addition to software development, as a product manager, I defined customer requirements and managed product development including, medical devices, military communication systems, and commercial security systems.  I consider myself experienced in software development best practices and achieved my Lean Six Sigma Green Belt by improving a software development process, which reduced defects by 30%.</div>

      <div className='about-desc-paragraph'>I have recently decided to "go back to my roots" as a software developer, and have recently completed a full-stack web development program. This program focused on the latest technologies for building reliable, client/server web-based software.</div>

      <div className='about-desc-paragraph'>I am ready to start having fun developing software, and being part of an energetic, well-focused engineering team.
      </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     </div>
    )
  }
}

export default About;

