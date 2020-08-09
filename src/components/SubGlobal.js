import React from 'react'
import CountUp from 'react-countup';

function SubGlobal(props) {
    const {heading, number, color }=props;
    const classes=`${color} card-subtitle`
    return (
        <div className="col-md-5 text-center mt-3" >
            <p className={classes}>{heading}</p>
            <p className={`${color} card-text`}><CountUp start={number-10000} end={number} duration={5} /></p>
        </div>
    )
}


export default SubGlobal;
