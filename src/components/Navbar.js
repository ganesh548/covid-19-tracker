import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

 function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <AnchorLink className="navbar-brand" href="/"><i className="fas fa-virus mr-1"></i>Covid-19</AnchorLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <hr></hr>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#single">Country Data</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#news">News</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#credit">Credits</AnchorLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
