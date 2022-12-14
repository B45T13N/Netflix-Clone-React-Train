import React from 'react'
import "./MovieSection.css";


function MovieSection({ title, items }) {
    return (
        <div>
            <h2>{title}</h2>
            <div className='movieRow--listrea'>
                <div className="movieRow--list">
                    {
                        items.results.length > 0 && items.results.map((item, key) => (
                            <div className='movieRow--item' key={key}>
                                <img alt={item.title}
                                    src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieSection