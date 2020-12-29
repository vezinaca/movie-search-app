import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import MovieCard from "./MovieCard";
import './style.css';

function App() {
  const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    /*
    async function getMovies(e){
        e.preventDefault();

        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2833e0db3458d8ee2868046d6f658295&language=en-US&query=${query}&page=1&include_adult=false`);
        const data = await response.json();
        setMovies(data.results);
    }
    */

    const searchMovies = (e) =>{
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=2833e0db3458d8ee2868046d6f658295&language=en-US&query=${query}&page=1&include_adult=false`;
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                console.log(data.results);
                setMovies(data.results);
            })
    }

    const allMovies = movies.filter(movie => movie.poster_path).map(movie =>
        <MovieCard key={movie.id} movie={movie} />
        );

    return (
        <div className="container">
            <h1 className="title">React Movie Search TEST</h1>
            <form className="form" onSubmit={searchMovies}>
                <label className="label">Movie:</label>
                <input  
                    type="text"
                    className="input"
                    placeholder="i.e. Big"
                    value={query}
                    onChange={(evt) => setQuery(evt.target.value) }
                    
                />
                <button className="button">Search</button>
            </form>
            <div className="card-list">
                {allMovies}
            </div>

            
            
            
        </div>
    );
}

export default App;
