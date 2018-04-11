import React from 'react';
import NavBar from './Nav-Bar';

class About extends React.Component {
  render() {

    return(
      <div>
       <div>
       </div>
       <div>
         <h1 className='page-title'>About</h1>
      </div> 
      <div className='about-desc'>
      <div className='about-desc-paragraph'>My name is Patricia Forrester, but you can call me Tricia.  I am an experienced software developer with technical skills ranging from embedded C++, to most recently, full-stack web development.  In addition to software development, as a product manager, I defined and managed products to include, medical devices, military communication systems, and commercial security systems.  I consider myself an expert in software best practises and achieved my Lean Six Sigma Green Belt by improving a software development process, which reduced defects by 25%.</div>

      <div className='about-desc-paragraph'>I have recently decided to "go back to my roots" as a software developer, and recently completed a full-stack web development program, focusing on the latest technologies for building reliable, client/server web-based software.</div>

      <div className='about-desc-paragraph'>I am ready to start having fun, developing software, and being part of an energetic, well-focused engineering team.
      </div>
      </div>
     </div>
    )
  }
}

export default About;

