import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className='container' >
        <Link class="navbar-brand " to="/">Register</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/login">Login <span class="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
