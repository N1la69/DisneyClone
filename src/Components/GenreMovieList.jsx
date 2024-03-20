import React from 'react'
import GenresList from '../Constants/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
    return (
        <div>
            {GenresList.genres.map((item, index) => index <= 6 && (
                <div className='p-8 px-8 md:px-16'>
                    <h2 className='text-white text-2xl font-semibold'>{item.name}</h2>
                    <MovieList genreId={item.id} />
                </div>
            ))}
        </div>
    )
}

export default GenreMovieList