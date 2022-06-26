import { useState } from 'react';
import About from './components/about.component';
import Contact from './components/contact.component';
import Projects from './components/projects.component';
import Overview from './components/overview.component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
      mode: 'dark',
      primary: {
        main: "#FFFFFF"
      }
    },
  })

  const [theme, setTheme] = useState("dark");
  const [compIndex, setCompIndex] = useState(0);

  const components = [<Overview />, <About />, <Projects />, <Contact/>];

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
          style={{
            minHeight: '80vh',
            height: {
              xs: "100%",
              sm: "100%",
            }
          }}
        >
          <Grid item xs={3}>
            <Paper className="mainCard" sx={{bgcolor: "background.secondary", color: "primary.main"}}>
              <Box sx={{flexGrow: 1}}>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{minHeight: "60vh"}}
                >
                  <Grid item xs={6}>
                    { components[compIndex] }
                  </Grid>
                  <Grid item xs={6}>
                    <div className="buttons">
                      <Stack spacing={3} direction={{ xs: 'row', sm: 'row' }} justifyContent="center" alignItems="center">
                        <Button onClick={leftButton}><ChevronLeftIcon /></Button>
                        <Button onClick={switchTheme}>theme</Button>
                        <Button onClick={rightButton}><ChevronRightIcon /></Button>
                      </Stack>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default App;
