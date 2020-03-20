import React from 'react'

import { Link } from 'react-router-dom'


class Navigataion extends React.Component {

  render () {
    return (

      <nav  class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <span   class="nav-item nav-link active cw"><Link to="/">Home</Link></span>
          <span class="nav-item nav-link active cw "><Link to="/newpost">Create New Post</Link></span>
          <span class="nav-item nav-link cw"><Link to="/login">Sign In</Link></span>
          <span class="nav-item nav-link cw"><Link to="/signup">Sign Up</Link></span>

        </div>
        </div>
      </nav>

    )
  }
}

export default Navigataion
