import React from 'react';
import NavBar from './Nav-Bar';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className='info-resume'>
          <NavBar />
          <img src='../images/PForrester_Infographic_Resume.png' height='980' width='700' border='1px solid black'/>
        </div>
      </div>
    );
  }
}

export default App;
