import React from 'react';



export default class NavBar extends React.Component {

  render(){

    return(
      <div className='nav-bar'>
       <section>
        <h2>Projects:</h2>
          <a className="nav-links" href='https://learning-asl-alphabet.netlify.com'>Learn the ASL Alphabet App</a><br/><br/>
          <a className='nav-links' href='https://manage-care.netlify.com'>Manage Care App for Caregivers</a><br/><br/>
          <a className='nav-links' href='https://streamLine.netlify.com'>StreamLine App - Where is my movie streaming</a><br/><br/>
          <a className='nav-links' href='https://cleveland-browns-trivia'>The Cleveland Browns Trivia App </a>
        </section>
        <section>
        <h2>Resume:</h2>
          {/* <object data='../images/PForrester.mht' width='400' height='400'>PForrester_Resume</object> */}
        </section>
        <section>
        <h2>LinkedIn:</h2>
          <a className='nav-links' href='https://www.linkedin.com/in/pforrester/'>Tricia Forrester - LinkedIn</a>
        </section>
        
    </div>
    );
  }
}