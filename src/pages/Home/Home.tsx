import MovieSection from 'components/MovieSection/MovieSection';
import Navbar from 'components/Navbar/Navbar';
import { API_MOVIE_NOW_PLAYING_URL, API_MOVIE_POPULAR_URL, API_MOVIE_TOP_RATED_URL, API_MOVIE_TRENDING_DAY_URL, API_MOVIE_TRENDING_WEEK_URL, API_SERIE_NOW_PLAYING_URL, API_SERIE_POPULAR_URL, API_SERIE_TOP_RATED_URL, API_SERIE_TRENDING_DAY_URL, API_SERIE_TRENDING_WEEK_URL } from 'components/TMBDComponents/api';
import { HomeBody } from './styles';

export default function Home() {
    const apiMoviePopular = {
        apiUrl: API_MOVIE_POPULAR_URL,
        sectionTitle: 'Mais populares do momento'
    };
    const apiMovieTopRated = {
        apiUrl: API_MOVIE_TOP_RATED_URL,
        sectionTitle: 'Mais bem avaliados'
    };
    const apiMovieUpcoming= {
        apiUrl: API_MOVIE_NOW_PLAYING_URL,
        sectionTitle: 'Lançamentos'
    };
    const apiMovieTrendingWeek= {
        apiUrl: API_MOVIE_TRENDING_WEEK_URL,
        sectionTitle: 'Tendências da semana'
    };
    const apiMovieTrendingDay= {
        apiUrl: API_MOVIE_TRENDING_DAY_URL,
        sectionTitle: 'Tendências do dia'
    };
    const apiSeriePopular = {
        apiUrl: API_SERIE_POPULAR_URL,
        sectionTitle: 'Séries mais populares do momento'
    };
    const apiSerieTopRated = {
        apiUrl: API_SERIE_TOP_RATED_URL,
        sectionTitle: 'Mais bem avaliados'
    };
    const apiSerieUpcoming= {
        apiUrl: API_SERIE_NOW_PLAYING_URL,
        sectionTitle: 'Lançamentos'
    };
    const apiSerieTrendingWeek= {
        apiUrl: API_SERIE_TRENDING_WEEK_URL,
        sectionTitle: 'Tendências da semana'
    };
    const apiSerieTrendingDay= {
        apiUrl: API_SERIE_TRENDING_DAY_URL,
        sectionTitle: 'Tendências do dia'
    };
    return (
        <HomeBody>
            <Navbar />
            <MovieSection {...apiMoviePopular}/>
            <MovieSection {...apiMovieTopRated}/>
            <MovieSection {...apiMovieUpcoming}/>
            <MovieSection {...apiMovieTrendingWeek}/>
            <MovieSection {...apiMovieTrendingDay}/>
            <MovieSection {...apiSeriePopular}/>
            <MovieSection {...apiSerieTopRated}/>
            <MovieSection {...apiSerieUpcoming}/>
            <MovieSection {...apiSerieTrendingWeek}/>
            <MovieSection {...apiSerieTrendingDay}/>
        </HomeBody>
    )
}