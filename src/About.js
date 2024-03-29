import React from 'react';

class About extends React.Component {
  render() {

    return(
      <div>
       <div id='about'>
       </div>
       <div>
         <h1 className='page-title'>About</h1>
      </div>
      <div id='tricia-img'><img src='../images/PForrester.jpg' alt='Tricia_pic' height='260px' width='260px'/></div>
      <div className='about-desc'>
      <div className='about-desc-paragraph'>My name is Patricia Forrester, but please call me Tricia.  I am an experienced product & project manager, and have experience in defining customer requirements and managing product development including, medical devices, military communication systems, commercial security systems, and RF power generators used in the semiconductor industry.  As an experienced software developer, with technical skills ranging from embedded C++ to full-stack web development, I worked on products such as printing systems, military communication and both hosted and embedded websites.  I consider myself experienced in software development best practices and achieved my Lean Six Sigma Green Belt by improving a software development process, which reduced defects by 30%.</div>

      {/* <div className='about-desc-paragraph'>I recently decided to "go back to my roots" as a software developer, and complete a full-stack web development program. This program focused on the latest technologies for building reliable, client/server web-based software. </div> */}

      <div className='about-desc-paragraph'>I am excited to learn new technologies and help teams and companies achieve their goals through well-defined, efficient processes. Most of all, I am ready to start having fun and being part of an energetic, well-focused engineering team.
      </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     </div>
    )
  }
}

export default About;

