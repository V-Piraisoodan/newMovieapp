import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect , useState } from 'react';


export function MoviesDetails() {
  const { id } = useParams();
  // const movie = movies[id];
  const history = useHistory();
  // console.log(movie)

  const [movie , setMovie] = useState({});
  useEffect(()=>{
    fetch(`https://62dd3993ccdf9f7ec2c27434.mockapi.io/movies/${id}`,
    {
      method: "GET",
    })                                                          //to get the api
    .then(data=>data.json())                                   // to convert the date into json format
    .then(ans=> setMovie(ans))                                //get the output in console
  }, []);
  return (
    <div className='trailer-container'>
      <iframe width="200%"
        height="620"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className='container'>
        {/* <h1>Movie Details {id} </h1> */}

        <div className='movie-specs1'>
          <h3 className="movie-name1">{movie.moviename}</h3>
          <p className="movie-rating1">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary1">{movie.para}</p>
        <div className='back-btn'>
          <Button
            className='back-btn1'
            onClick={() => history.goBack()}
            variant="contained"
            size="large"
            startIcon={<KeyboardBackspaceIcon />}>Back
          </Button>
        </div>

      </div>
    </div>
  );
}
