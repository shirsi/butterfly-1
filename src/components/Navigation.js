import React from 'react'
import New from './New'
import { Link } from 'react-router-dom'


class Navigataion extends React.Component {

  render () {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <span class="nav-item nav-link active"><Link to="/">Home</Link></span>
          <span class="nav-item nav-link"><Link to="/login">Sign In</Link></span>
          <span class="nav-item nav-link"><Link to="/signup">Sign Up</Link></span>
          <span class="nav-item nav-link"><Link to="/discover">Discover</Link></span>
          
          {/* <Link t0="/locations">Locations</Link> */}

        </div>
        </div>
      </nav>
    )
  }
}

export default Navigataion