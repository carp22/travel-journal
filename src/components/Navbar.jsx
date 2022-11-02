import React from 'react'
import navbar_world from '../../public/images/world.png'

function Navbar() {
  return (
    <div>
        <div className="navbar-travel">
            <img src={navbar_world} alt="not found" />
            <h3 className='travel-journal_title'>my travel journal.</h3>
        </div>
    </div>
  )
}

export default Navbar