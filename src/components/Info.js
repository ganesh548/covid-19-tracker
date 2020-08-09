import React from 'react'

 function Info(props) {
     const {value}=props
    return (
        <div className="card m-2" id={value.title} key={value.link}>            
           <div className="card-body">
           <div className="card-text">
                {value.title}
            </div>
            <hr/>
            <div className="text-muted font-italic mt-1">
                Published on-{value.date_published.slice(0,10)}
            </div>
            <hr/>
                <a className="btn btn-primary mt-2" href={value.link}>Read more</a>
           </div>
        </div>
    )
}

export default Info
