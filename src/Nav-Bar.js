import React from 'react';



export class NavBar extends React.Component {

  render(){

    return(
      <div className='nav-bar'>
        <div className='nav-bar-word'>
          <a className='nav-bar-link' href='/'>Intro</a>
        </div>
        <div className='nav-bar-word'>
          <a className='nav-bar-link' href='/projects'>Projects</a>
        </div>
        <div className='nav-bar-word'>
          <a className='nav-bar-link' href='/about'>About</a>
        </div>
        <div className='nav-bar-word'>
          <a className='nav-bar-link' href='/resume'>Resume</a>
        </div>
     </div>
    );
  }
}

export default NavBar;