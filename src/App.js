import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ApiMovie from './ApiMovie';
import MovieSection from './components/MovieSection';

function App() {

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {

    const loadAllMovies = async () => {

      let list = await ApiMovie.getHomeMovies();
      setMoviesList(list);

    }

    loadAllMovies()

  }, [])

  return (
    <div className="container">
      <section className='list'>
        {
          moviesList.map((item, key) => (
            <MovieSection key={key} title={item.title} items={item.items} />
          ))
        }
      </section >

    </div >
  );
}

export default App;
