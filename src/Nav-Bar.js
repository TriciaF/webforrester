import React from 'react';



export default class NavBar extends React.Component {

  render(){

    return(
      <div className='nav-bar'>
       <section className='section section-projects'>
        <h2>Projects:</h2>
          <a className="nav-links" href='https://learning-asl-alphabet.netlify.com'>Learn the ASL Alphabet App</a><br/><br/>
          <a className='nav-links' href='https://manage-care.netlify.com'>Manage Care App for Caregivers</a><br/><br/>
          <a className='nav-links' href='https://streamline-capstone.herokuapp.com'>StreamLine App - Where is my movie streaming</a><br/><br/>
          <a className='nav-links' href='https://cleveland-browns-trivia'>The Cleveland Browns Trivia App </a>
        </section>
        <section className='section section-resume'>
        <h2>Resume:</h2>
          {/* <object data='../images/PForrester.mht' width='400' height='400'>PForrester_Resume</object> */}
          {/* <img src='../images/PForrester_Infographic_Resume.png' height='980' width='700' border='1px solid black'/> */}
        </section>
        <section className='section section-linkedin'>
        <h2>LinkedIn:</h2>
          <a className='nav-links' href='https://www.linkedin.com/in/pforrester/'>Tricia Forrester - LinkedIn</a>
        </section>
        
    </div>
    );
  }
}