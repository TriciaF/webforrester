import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import {Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
        <main>
          <Intro />
          <About />
          <Projects />
          <Resume />
           {/* <Route exact path='/' component={Intro}/>
           <Route exact path='/about' component={About}/>
           <Route exact path='/projects' component={Projects}/>
           <Route exact path='/resume' component={Resume}/>  */}
        </main>
    );
  }
}

export default App;
