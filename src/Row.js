import React,{useEffect, useState} from 'react'
import axios from 'axios';
import YouTube from 'react-youtube';
import Axios from "./Axios";
import movieTrailer from 'movie-trailer';
import "./RowStyle.css";

function Row({title,fetchUrl,isLargeRow}) {
  const [movies,setMovies]= useState([]);
   const baseUrl="https://api.themoviedb.org/3";
   const base_url = "https://image.tmdb.org/t/p/original/";

   const[trailerUrl,setTrailerUrl]= useState("");

  useEffect(()=>{
   // if [],run once the row loads,and dont run again
       async function fetchData(){
        const request=await axios.get(baseUrl+fetchUrl);
        // console.log(baseUrl+fetchUrl);
        // console.log(request.data.results);
        setMovies(request.data.results);
        return request;
       }
       fetchData();

  },[baseUrl+fetchUrl]);

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    }
  }

  const handleClick = (movie) => {
    // console.table(movie?.title)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }


  return (
    <div className='row'>
          {/* Title */}
    <h2>{title}</h2>
     <div className="rowPosters">
       {movies.map(movie=>(
      <img key={movie.id}
         onClick={()=>{
                handleClick(movie)
      }}
      className={`rowPoster ${isLargeRow && "row_posterLarge"}`}
       src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path }` } alt={movie.name} />
          ))}
      </div>
      <div style={{ padding: "40px" }}>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  )
}

export default Row