import axios from 'axios';
import { LANGUAGE, API_KEY, API_BASE_URL } from 'components/TMBDComponents/api';
import IMovie from 'interfaces/IMovie';
import { useState, useEffect } from 'react';
import MovieBox from '../MovieBox/MovieBox';
import { Conteiner } from './styles';

type APIConfig = {
  apiUrl: string;
  sectionTitle: string;
}

export default function MovieList(SectionConfig:APIConfig) {
  const [movies, setMovies] = useState<IMovie>()
  useEffect(() => {
    axios.get(`${API_BASE_URL}${SectionConfig.apiUrl}${API_KEY}${LANGUAGE}`)

      .then(({ data }) => {
        setMovies(data.results)
        console.log(data.results)
        console.log('GOOD REQUEST!')
      })
      .catch(function (error){
        console.log(error);
        console.log('BAD REQUEST!')

      } )

  }, [])
  return (
    <section>
      <h2>{SectionConfig.sectionTitle}</h2>
      <Conteiner>
        {movies && movies.map((movie: any) => <MovieBox movies={movie} />)}
      </Conteiner>
    </section>
  )
}