import React from 'react'

function IconCarousel() {
    return (
        <div className="bg-light mb-2 mt-3 py-4" style={{height:"11rem"}}>
            <div id="carouselExampleIndicators " className="carousel slide" data-ride="carousel">
            <div className="carousel-inner text-center ">
                <div className="carousel-item active ">
                    <div className="row">
                        <i className="fas fa-hands-wash fa-4x mx-auto"></i>
                    </div>
                    Quick scrub and rinse will not eliminate all virus so wash hands properly for atleast 20 seconds
                </div>
                <div className="carousel-item">
                    <div className="row">
                    <i className="fas fa-people-arrows fa-4x mx-auto"></i>
                    </div>
                    Distance means so little when life means so much ,so avoid social gatherings
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <i className="fas fa-handshake-slash fa-4x mx-auto"></i>
                    </div>
                    Joined palms, hands on hearts, vulcan salutes:<br/>Saying hello in a no-handshake era
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <i className="fas fa-head-side-cough-slash fa-4x mx-auto"></i>
                    </div>
                    Don't cough in public
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default IconCarousel
