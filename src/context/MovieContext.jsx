import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)


export const MovieProvider = ({children}) =>{

    const [favorites, setFavorires] = useState(() => {
        const storedFavs = localStorage.getItem("favorites");
        return storedFavs ? JSON.parse(storedFavs) : [];
    });

    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) =>{
        setFavorires(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieID) =>{
        setFavorires(prev=> prev.filter(movie=> movie.id !== movieID))
    }

    const IsFavorite = (movieID) =>{
        return favorites.some(movie => movie.id === movieID)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        IsFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}