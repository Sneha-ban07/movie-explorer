import { Route, Routes } from 'react-router-dom';
import "./css/App.css"
import Home from './pages/home';
import Favorite from './pages/favorites';
import Navbar from './components/Navbar';
import { MovieProvider } from './context/MovieContext';

function App() {


  return (
    <>
    <MovieProvider>
    <div>
    <Navbar/>
    <main className="main-content">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorite/>}></Route>
      </Routes>
      </main>
      </div>
      </MovieProvider>
    </>
  )
}

export default App
