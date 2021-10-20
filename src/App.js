import './App.css';
import './globalStyles.css'

import { Switch, Route } from 'react-router-dom'

import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
        <Hero />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/skills">
        <Skills />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
