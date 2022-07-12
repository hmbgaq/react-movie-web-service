import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie)
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])
    return <div>
        {loading ? <h1>Loading...</h1> : 
        <div>
            <Movie 
                id = {movie.id}
                coverImg={movie.background_image}
                title = {movie.title}
                summary = {movie.description_full}
                genres = {movie.genres}
            />
        </div>
        }
    </div>
}

export default Detail;