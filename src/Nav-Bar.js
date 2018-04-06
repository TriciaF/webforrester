import React from 'react';



export class NavBar extends React.Component {

  render(){

    return(
      <div className='nav-bar'>
        <div className='nav-bar-word'>
          <a href='/'>Intro</a>
        </div>
        <div className='nav-bar-word'>
          <a href='/projects'>Projects</a>
        </div>
        <div className='nav-bar-word'>
          <a href='/About'>About</a>
        </div>
     </div>
    );
  }
}

export default NavBar;