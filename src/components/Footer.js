import React from 'react'

 function Footer() {
    return (
        <div className="bg-light" id="credit">
            <div className="container text-center card brnone bg-light">
                <p className=" mt-3 card-title" style={{fontSize:'1.5rem'}}>Credits</p>
                <div className="card-body">
                <div className="md-col-4 card-text">
                    <a href="https://getbootstrap.com/" className="badge badge-light" style={{fontSize:"1rem"}}>Bootstrap</a>
                </div>
                <hr />
                <div className="md-col-4">
                    <a href="https://newsapi.org/" className="badge badge-light" style={{fontSize:"1rem"}}>News Api</a>
                </div>
                <hr />
                <div className="md-col-4">
                    <a href="https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest" className="badge badge-light" style={{fontSize:"1rem"}}>Covid-19 Api</a>
                </div>
                <hr />
                <div className="md-col-4 ">
                    <a href="https://fontawesome.com" className="badge badge-light" style={{fontSize:"1rem"}}>Font Awesome</a>
                </div>
                </div>
            </div>
            <hr/>
            <div className="card-text text-warning text-center mb-2">This is not an official website.</div>
        </div>
    )
}
export default Footer
