import React from 'react'
import NavbarComponent from '../components/Navbar/Navbar.Component'

const DefaultLayout = (Component) => ({...props})=> {
  return (
    <div>
    <NavbarComponent/>
    <Component  {...props} />
    </div>
  )
}

export default DefaultLayout