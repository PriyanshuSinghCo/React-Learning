
import React from 'react'

export default  function Header() {
  return (
    <header className = "header-container">
        <div className="header-content">
            <h2 className="title">
                <a href="/">Where in the world?</a>
            </h2>
            <p className="theme-changer">
            <i className="fa fa-solid fa-moon">Dark Mode</i>
                
            </p>
        </div>

    </header>
  )
}

