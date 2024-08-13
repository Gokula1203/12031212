import React from 'react'
import MovieNavbarComponent from '../components/Navbar/MovieNavbar.Component'

const MovieLayout = (Component)=> ({...props})=>{
  return (
    <div><MovieNavbarComponent/>
    <Component {...props}/>
    </div>

  )
}

export default MovieLayout