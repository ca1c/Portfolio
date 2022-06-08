import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/about.component';
import Contact from './components/contact.component';
import Projects from './components/projects.component';
import Stack from './components/stack.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/stack">
          <Stack />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
