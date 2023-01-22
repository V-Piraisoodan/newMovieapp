import Button from '@mui/material/Button';
import { useState ,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

// export function EditMovie({ movie, setmovie }) {      ithu probs moolamaga movie detail perum method {movie,setmovie}
export function EditMovie() {

  const {id} = useParams();
  // const movies = movie[id];  ithu probs method

  // use effect or API method
  const [movies , setMovies] = useState(null);
  useEffect(()=>{
    fetch(`https://62dd3993ccdf9f7ec2c27434.mockapi.io/movies/${id}`,
    {
      method: "GET",
    })                                                          //to get the api
    .then(data=>data.json())                                   // to convert the date into json format
    .then(ans=> setMovies(ans))                                //get the output in console
  }, []);
  return movies ? <UpdatedMovie movies={movies} /> : ""
}

function UpdatedMovie({movies}){

  const [moviename, setMoviename] = useState(movies.moviename);
  const [pic, setPic] = useState(movies.pic);
  const [para, setPara] = useState(movies.para);
  const [rating, setRating] = useState(movies.rating);
  const [trailer,setTrailer] = useState(movies.trailer);

  const history = useHistory();

  const Edit_movie = () => {
    console.log({ moviename: moviename, pic: pic, para: para, rating: rating });
    const UpdatedMovie = {
      moviename,
      pic,
      para,
      rating,
      trailer,
    };

    //fetch or use effect method

    fetch(`https://62dd3993ccdf9f7ec2c27434.mockapi.io/movies/${movies.id}`,
    {
      method : "PUT",
      body : JSON.stringify(UpdatedMovie),
      headers : {"Content-type" : "application/json"}
    })
    .then(()=>history.push('/movies')) ;

    // history.push('/movies');   probs method
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
        <Button className='button_' variant="contained" color="success" onClick={Edit_movie}> Save </Button>
      </div>

    </div>
  );
}
