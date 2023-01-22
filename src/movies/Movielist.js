import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';
import { useEffect , useState } from 'react';

// COUNTER IMPORT  111111111
export function Movielist() {
  const history = useHistory();
  const [movie,setmovie] = useState([])
  console.log(movie)

  const getMovies = () => {
    fetch("https://movieapp-jbzi.onrender.com/movies",
    {
      method : "GET",
    }) //to get the api
    .then(data=>data.json())                                   // to convert the date into json format
    .then(ans=> setmovie(ans))  
  }

  useEffect(getMovies, []);

  //api method
  const removeMovie = (id) => {

    //after delete --> refresh the movie details
    fetch(`https://62dd3993ccdf9f7ec2c27434.mockapi.io/movies/${id}`,
    {
      method : "Delete",
    })
    .then (()=>getMovies())
  }


  //probs method

  // const removeMovie = (index) => {
  //   console.log(index)
  //   //create a copy of movie list & remove the element from it -- filter
  //   const removeMovieIndex = index;
  //   const remainingMovies = movie.filter((mv ,idx)=>  //we pass the 2 arguments(mv & idx) value and index(removeMoviesIndex)   
  //     idx !== removeMovieIndex
  //   );
  //   console.log(remainingMovies,movie,removeMovieIndex)
  //   setmovie(remainingMovies);
  //   }

  return (
    <section className="movie-list">
      {movie.map(({ moviename, pic, rating, para, trailer, id },index) => (
        <Movie 
          key={index} 
          moviename={moviename} 
          pic={pic} 
          rating={rating} 
          para={para} 
          trailer={trailer} 
          id={id}
          deleteButton = {
           <IconButton onClick={()=>removeMovie(id)}color="error" aria-label="delete" >
             <DeleteIcon />
            </IconButton>}
          editButton = {
            <IconButton style={{marginLeft:"auto"}}
              onClick={()=> history.push("/movies/edit/" + id)} 
              size="small" 
              color="secondary" 
              aria-label="edit">
             <EditIcon />
            </IconButton>
          }/>
      ))}
    </section>
  ); 
}


// without material ui button

// deleteButton = {<button onClick={()=>{
//   console.log(index)
//   //create a copy of movie list & remove the element from it -- filter
//   const removeMovieIndex = index;
//   const remainingMovies = movie.filter((mv ,idx)=>  //we pass the 2 arguments(mv & idx) value and index(removeMoviesIndex)   
//     idx !== removeMovieIndex
//   );
//   console.log(remainingMovies,movie,removeMovieIndex)
//   setmovie(remainingMovies);
// }}>delete</button>}