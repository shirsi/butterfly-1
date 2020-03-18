import React from 'react'
import { Link } from 'react-router-dom'

class Navigataion extends React.Component {
  render () {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/discover">Discover</Link>
        {/* <Link t0="/locations">Locations</Link> */}
      </nav>
    )
  }
}

export default Navigataion