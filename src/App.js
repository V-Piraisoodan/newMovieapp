import './App.css';
import {Movielist} from './movies/Movielist.js'
import { useEffect,useState } from 'react';
import {BrowserRouter, Switch,Link,Route,Redirect} from 'react-router-dom';
import { NotFound } from './NotFound';
import { MoviesDetails } from './movies/MoviesDetails';
import { AddMovie } from './movies/AddMovie';
import { EditMovie } from './movies/EditMovie';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import { Homepage } from "./home/home"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material/styles';  // dark theme import
import Paper from '@mui/material/Paper';  // PAPER Import

import Brightness4Icon from '@mui/icons-material/Brightness4';  // light and dark icon import
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {

  // const [movie,setmovie] = useState([])
  const history = useHistory();

  const [mode,setmode] = useState("light")
  console.log(mode)

  const darkTheme = createTheme({   //STEP:1 dark theme CONTEXT Creating
    palette: {
      mode: mode,
    },
  });

  // useEffect(()=>{
  //   fetch("https://62dd3.mockapi.io/movies") //to get the api
  //   .then(data=>data.json())                                   // to convert the date into json format
  //   .then(ans=> setmovie(ans))                              //get the output in console
  // }, []);

  // another method async and await

  const paperStyles = {
    borderRadius : "0px",
    minHeight : "100vh"
  }
  

  return (                          // STEP:2 Publishing
  <ThemeProvider theme={darkTheme}> 
    <Paper elevation={6} style={paperStyles}>
      <div className="App">
 
      
        {/* <ul className='navication'>
         <li><Link to='/' className='navication_list'>Home</Link></li>
         <li><Link to='/movies' className='navication_list'>Movies</Link></li>
         <li><Link to='/movies/add' className='navication_list'>Add Movies</Link></li>
         <li><Link to='/color-game' className='navication_list'>Color-Game</Link></li>
        </ul> */}

        <AppBar position="sticky">
          <Toolbar>
            <Button onClick={()=>history.push('/')}
              size="large" color="inherit" aria-label="Home">
              Home
            </Button>

            <Button onClick={()=>history.push('/movies')}
              size="large" color="inherit" aria-label="Movies">
              Movies
            </Button>

            <Button onClick={()=>history.push('/movies/add')}
              size="large" color="inherit" aria-label="Add Movies">
              Add Movies
            </Button>

            <Button onClick={()=>  setmode(mode === "dark" ? "light" : "dark")}
              style = {{marginLeft:"auto"}}
              size="large" color="inherit" aria-label="Mode"
              endIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}>
              {mode === "dark" ? "light" : "dark"} Mode
              {/* {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} */}
            </Button>
          </Toolbar>
        </AppBar>
      
       
        <Switch>
          {/* home path */}
          <Route exact path='/'>
            <Homepage theme={darkTheme}/>
          </Route>

          {/* film new path,it is redirected to the "/movies" path */}
          <Route path='/films'>
            <Redirect to="/movies"/>
          </Route> 

          {/* add movies */}
          <Route path='/movies/add'>
            <AddMovie />
          </Route>

          {/* edit movie */}
          <Route path='/movies/edit/:id'>
            <EditMovie />
          </Route>  

          {/* dynamic route */}
          <Route path='/movies/:id'>
            <MoviesDetails />
          </Route>  

          {/*movies path  */}
          <Route path='/movies'>
            <Movielist />
          </Route>

        
          {/* 404 page path */}
          <Route path="**">
            <NotFound/>
          </Route> 
        </Switch>
       

        {/* <Counter/> */}
        {/* <ColourBox/> */}
        {/* <Addcolour /> */}

      </div>
    </Paper>
  </ThemeProvider>
  );
}

export default App;
