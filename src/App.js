import { useState } from 'react';
import logo from './logo.svg';
import { Routes, Route} from 'react-router-dom';
import About from './components/about.component';
import Contact from './components/contact.component';
import Projects from './components/projects.component';
import Stack from './components/stack.component';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './App.css';

/*linear-gradient(0deg, #e2008b 0%, #fdb146 49%, #fde767 100%)*/

function App() {
  const lightTheme = createTheme({
    palette: {
      background: {
        default: "#ededed",
        secondary: "#ffffff",
      },
      primary: {
        main: "#000000"
      }
    }
  });
  
  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#002054",
        secondary: "#03368a"
      },
      primary: {
        main: "#ffffff"
      },
      secondary: {
        main: "#222222"
      },
    }
  })

  const components = [<About />, <Contact />, <Projects />, <Stack />];

  const [theme, setTheme] = useState("light");
  const [compIndex, setCompIndex] = useState(0);
  // const [selectedComponent, setSelectedComponent] = useState(components[compIndex]);

  function switchTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  }

  function leftButton() {
    if(compIndex === 0) {
      setCompIndex(components.length - 1);
    } else {
      setCompIndex(compIndex - 1);
    }
  }

  function rightButton() {
    if(compIndex === components.length - 1) {
      setCompIndex(0);
    } else {
      setCompIndex(compIndex + 1);
    }
  }

  return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '80vh' }}
        >
          <Grid item xs={3}>
            <Paper className="mainCard" sx={{bgcolor: "background.secondary", color: "primary.main"}}>
              { components[compIndex] }
              <Button onClick={switchTheme}>theme</Button>
              <Button onClick={leftButton}>Left</Button>
              <Button onClick={rightButton}>Right</Button>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default App;
