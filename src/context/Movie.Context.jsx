import React, { createContext, useState } from 'react'
export const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const [movie,setMovie] = useState({
        id:0,
        Overview:"",
        original_title:"",
        backdropo_path:"",
        poster_path:""

})
  return <MovieContext.Provider value={{movie,setMovie}}>{children}</MovieContext.Provider>
}

export default MovieProvider
