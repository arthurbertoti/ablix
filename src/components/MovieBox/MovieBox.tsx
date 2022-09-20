import { API_IMG } from 'components/TMBDComponents/api';
import IMovie from 'interfaces/IMovie';
import { MovieConteiner, PosterConteiner } from './styles';

const MovieBox = ({movies}:IMovie) => {
    return (
        <MovieConteiner key={movies.id}>
            <PosterConteiner>
            <img src={`${API_IMG}${ movies && movies.poster_path}`} alt={`${movies && movies.title || movies.name} Poster`}/>
            </PosterConteiner>
            <h3>{movies.title || movies.name} ({movies.release_date || movies.first_air_date})</h3>
        </MovieConteiner>
    )
}

export default MovieBox