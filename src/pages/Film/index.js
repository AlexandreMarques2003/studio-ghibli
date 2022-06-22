import './styles.scss';

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export function Film() {

    const { id } = useParams();
    const [film, setFilm] = useState([]);

    useEffect(() => {
        async function getFilm() {
            const response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            const data = await response.json();
            console.log(data);
            setFilm(data);
        }
        getFilm()
    }, [id])

    return (
        <main className='film' >
            <div className='film_container'>
                <div className='film_card' >
                    <div className='banner' ><img width="200" src={film.movie_banner} alt={film?.title}></img></div>
                    <div className='banner_title' >{film?.title}</div>
                    <div className='japanese_title' >{film?.original_title}</div>

                    <div className='draw_lines'>
                        <div className='informative_title'>Director</div>
                        <div className= 'informative_text'>{film?.director}</div>
                    </div>

                    <div className='draw_lines'>
                        <div className='informative_title'>Producer</div>
                        <div  className='informative_text'>{film?.producer}</div>
                    </div>

                    <div className='draw_lines'>
                        <div className='informative_title'>Release Date</div>
                        <div  className='informative_text'>{film?.release_date}</div>
                    </div>                    
                   
                    <div className='draw_lines'>
                        <div className='informative_title'>Rt Score</div>
                        <div  className='informative_text'>{film?.rt_score}</div>
                    </div>   

                    <div className='draw_lines'>
                        <div className='informative_title'>Running Time</div>
                        <div  className='informative_text'>{film?.running_time}</div>
                    </div>

                    <div className='draw_lines'>
                        <div  className='informative_text'>{film?.description}</div>
                    </div>

                </div>
            </div>
        </main>
    )
}