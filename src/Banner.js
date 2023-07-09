import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './Banner.css';
import requests from './Request';


function Banner() {
 const [movie,setMovie]= useState([]);
 const baseUrl="https://api.themoviedb.org/3";
 const base_url = "https://image.tmdb.org/t/p/original/";

useEffect(()=>{
    async function fetchData(){
        const request= await axios.get(baseUrl+requests.fetchTopRated);
        // console.log(request);
       setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)]
        );
        return request;
    }
    fetchData();
},[]);
     console.log(movie);

  return (
    <header className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition:"center center",
      
    }
}
    >
       <div className="banner_contents">
              <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
     
       <div className='banner_buttons'>
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
       </div>
       <h1 className="banner_description">{movie?.overview}</h1>
       </div>

       <div className="banner--fadeBottom "></div>
    </header>
  )
}

export default Banner