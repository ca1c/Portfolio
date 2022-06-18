import { useState } from 'react';
import logo from './logo.svg';
import { Routes, Route} from 'react-router-dom';
import About from './components/about.component';
import Contact from './components/contact.component';
import Projects from './components/projects.component';
import SStack from './components/stack.component';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './App.css';
import { ChevronLeft } from '@mui/icons-material';

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
      mode: 'dark',
      primary: {
        main: "#FFFFFF"
      }
    },
  })

  const [theme, setTheme] = useState("light");
  const [compIndex, setCompIndex] = useState(0);

  const components = [<About />, <Contact theme={theme}/>, <Projects />, <SStack />];

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
              <Grid container direction="column" spacing={{xs: 10, sm: 10, md: 20, lg: 20}}>
                <Grid item xs={6}>
                  { components[compIndex] }
                </Grid>
                <Grid item xs={6}>
                  <div className="buttons">
                    <Stack spacing={3} direction={{ xs: 'column', sm: 'row' }} justifyContent="center" alignItems="center">
                      <Button onClick={leftButton}><ChevronLeftIcon /></Button>
                      <Button onClick={switchTheme}>theme</Button>
                      <Button onClick={rightButton}><ChevronRightIcon /></Button>
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default App;
