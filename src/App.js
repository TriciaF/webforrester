import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';


class App extends React.Component {
  render() {
    return (
        <main>
          <Intro />
          <About />
          <Projects />
          <Resume />
        </main>
    );
  }
}

export default App;
