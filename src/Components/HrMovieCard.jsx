import React from 'react';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const HrMovieCard = ({ movie }) => {
    return (
        <div>
            <section>
                <img src={IMAGE_BASE_URL + movie.backdrop_path} alt="mov" className='w-[110px] md:w-[260px] rounded-lg
             hover:scale-105 hover:border-[3px] border-gray-400 transition-all duration-300 ease-in cursor-pointer'/>
                <h2 className='w-[110px] md:w-[260px] text-white mt-2'>{movie.title}</h2>
            </section>
        </div>
    )
}

export default HrMovieCard