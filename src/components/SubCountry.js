import React from 'react';
import CountUp from 'react-countup';

export default function SubCountry(props) {
    const { heading, number, color }=props;
    const transformedNumber={number};
    // alert("hello" + {number});
    // const transformed=transformedNumber.toString();
    // const lastThree=transformed.substring(transformed.length-3);
    // const otherNumber=transformed.substring(0, transformed.length);
    // if(otherNumber !== '')
    //     lastThree=',' + lastThree;
    // const num=otherNumber.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree ;
    // alert(num);
    const classes=`${color} card-subtitle`
    return (
        <div className="col-md-5 text-center mt-3" >
            <p className={classes}>{heading}</p>
            <p className={color}><CountUp start={number-1000} end={number} duration={5} /></p>
        </div>
    )
}
