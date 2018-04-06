import React from 'react';
import NavBar from './Nav-Bar';


class Projects extends React.Component {
  render() {
    return(
      <div>
        <div>
            <NavBar />
        </div>
        <div className='project-sections'>
          <section className='section'>
            <h2>ASL Alphabet</h2>
              <a className="nav-links" href='https://learning-asl-alphabet.netlify.com'>Learn the ASL Alphabet App</a><br/><br/>
           </section>
        </div>
        <div>
          <section className='section'>
            <h2>Manage Care</h2>
              <a className='nav-links' href='https://manage-care.netlify.com'>Manage Care App for Caregivers</a><br/><br/>
           </section>
        </div>
        <div>
          <section className='section'>
            <h2>StreamLine</h2>
              <a className='nav-links' href='https://streamline-capstone.herokuapp.com'>StreamLine App - Where is my movie streaming</a><br/><br/>
           </section>
        </div>
        <div>
          <section className='section'>
            <h2>Cleveland Browns Trivia</h2>
              <a className='nav-links' href='https://cleveland-browns-trivia'>The Cleveland Browns Trivia App </a>
           </section>
        </div>
     </div>
    )
  }
}

export default Projects;