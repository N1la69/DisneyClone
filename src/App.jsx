import Footer from './Components/Footer'
import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/Header'
import ProductionHouse from './Components/ProductionHouse'
import Slider from './Components/Slider'

function App() {
  return (
    <div className='bg-[#131520]'>
      <Header />

      <Slider />
      
      <ProductionHouse />

      <GenreMovieList />

      <Footer />
    </div>
  )
}

export default App
