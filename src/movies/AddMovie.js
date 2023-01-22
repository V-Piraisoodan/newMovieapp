import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

export function AddMovie({ movie, setmovie }) {
  const [moviename, setMoviename] = useState("");
  const [pic, setPic] = useState("");
  const [para, setPara] = useState("");
  const [rating, setRating] = useState("");
  const [trailer,setTrailer] = useState("");

  const history = useHistory();

  const resetMovieForm = () => {
    setMoviename("");
    setPic("");
    setPara("");
    setRating("");
    setTrailer("");
  };

  const Add_movie = () => {
    console.log({ moviename: moviename, pic: pic, para: para, rating: rating });
    const newMovie = {
      moviename,
      pic,
      para,
      rating,
      trailer,
    };

    //api add
    fetch("https://movieapp-jbzi.onrender.com/movies",
    {
      method : "POST",
      body : JSON.stringify(newMovie),
      headers : {"Content-type" : "application/json"}
    })
    .then(()=>history.push('/movies')) ;
 
    //local add method

    // setmovie([...movie, newMovie]);
    // resetMovieForm();
    // history.push('/movies');
  };
  return (
    <div>
      <div className='input_fields'>
        <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie name" variant="outlined" value={moviename} onChange={(event) => setMoviename(event.target.value)} placeholder="Enter a movie name" />
        <TextField id="outlined-basic" color="primary" size='small' label="Enter a poster URL" variant="outlined" value={pic} onChange={(event) => setPic(event.target.value)} placeholder="Enter a poster URL" />
        <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie summary" variant="outlined" value={para} onChange={(event) => setPara(event.target.value)} placeholder="Enter a movie summary" />
        <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie rating" variant="outlined" value={rating} onChange={(event) => setRating(event.target.value)} placeholder="Enter a movie rating" />
        <TextField id="outlined-basic" color="primary" size='small' label="Enter a movie trailer" variant="outlined" value={trailer} onChange={(event) => setTrailer(event.target.value)} placeholder="Enter a movie trailer" />

      </div>
      <div className='button'>
        <Button className='button_' variant="contained" onClick={Add_movie}> Add movie </Button>
      </div>

    </div>
  );
}
