import logo from './logo.svg';
import { Routes, Route} from 'react-router-dom';
import About from './components/about.component';
import Contact from './components/contact.component';
import Projects from './components/projects.component';
import Stack from './components/stack.component';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  return (
    <div className="App">
        <Card sx={{ maxWidth: 900 }}>
          <Routes>
            <Route path="/about" element={ <About/> } />
            <Route path="/contact" element={ <Contact/> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/stack" element={ <Stack /> } />
          </Routes>
        </Card>
    </div>
  );
}

export default App;
