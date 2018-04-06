import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import {Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
        <main>
           <Route exact path='/' component={Intro}/>
           <Route exact path='/about' component={About}/>
           <Route exact path='/projects' component={Projects}/> 
        </main>
    );
  }
}

export default App;
