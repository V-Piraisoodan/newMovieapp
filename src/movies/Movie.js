import { Counter } from '../Counter.js';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from 'react-router-dom';
import CardActions from '@mui/material/CardActions';

export function Movie({ 
    pic, 
    moviename, 
    rating, 
    para,
    id,
    deleteButton,
    editButton}) {

  // hide para
  const [show , setShow] = useState(true);
  const history = useHistory();

  // conditional styling
  // const styles = {display : show ? "block" : "none"}

return (
    // <div className="movie-container">
  <Card className="movie-container">
      <img className="movie-poster"
        src={pic}
        alt={moviename} />
    {/* <CardContent>  vendum yendral use pannikkollalam  *************** */}
      <div className="movie-specs">
        <h3 className="movie-name">
          {moviename}
          <IconButton onClick={()=>setShow(!show)} color="primary" style={{marginTop: "-5px"}} >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
          </IconButton>
          <IconButton  onClick={()=> history.push("/movies/" + id)} color="primary" style={{marginTop:"-4px"}}> {/*  interpolation method --> history.push(`/movies/$(index)`)  */}
            <InfoIcon/>
          </IconButton>
        </h3>
        <p className="movie-rating">⭐{rating}</p>
      </div>
     
       {/* conditional styling */}
      {/* <p style={styles} className="movie-summary">{para}</p> */}

       {/* conditional rendering */}
       {show ? <p className="movie-summary">{para}</p> : ""}

      {/* Nested component - one component is using with inside the another component*/}
      <CardActions className="cardAction">
        <Counter/>
        {editButton}
        {deleteButton}
      </CardActions>
  </Card>
  );
} 
