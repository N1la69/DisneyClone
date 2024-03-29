import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, [])

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then(resp => {
      console.log(resp);
      setMovieList(resp.data.results)
    })
  }

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 125;
  }
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 125;
  }

  return (
    <div>
      <HiChevronLeft className='hidden md:block text-white text-4xl absolute mx-8 mt-[40vh] cursor-pointer' onClick={() => sliderLeft(elementRef.current)} />
      <HiChevronRight className='hidden md:block text-white text-4xl absolute mx-8 mt-[40vh] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)} />
      <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
        {movieList.map((item) => (
          <div className='min-w-full md:h-[80vh] mr-5 rounded-md hover:border-[4px]
          border-gray-400 transition-all duration-100 ease-in overflow-hidden'>
            <img src={IMAGE_BASE_URL + item.backdrop_path} alt="img" className='object-cover w-[100%]'/>
          </div>  
        ))}
      </div>
    </div>
  )
}

export default Slider