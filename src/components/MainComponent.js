import React, { useState, useEffect } from 'react'
import Global from "./Global"
import Country from "./Country"
import News from "./News"
import IconCarousel from './IconCarousel';
import ScrollAnimation from 'react-animate-on-scroll'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Footer from './Footer'

export default function MainComponent() {
    const initialGlobal=''
    const initialLoading=true
    const [global ,setGlobal]=useState(initialGlobal);
    const [loading, setLoading]=useState(initialLoading);

    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v3/covid-19/all')
        .then(res => {
        setGlobal(res.data)
        setLoading(false)
        })
        .catch(error=>{
        console.log(error)
        })  
    },[])
    return (
        <React.Fragment>
            {loading ? <div className="text-center mt-4"><Loader type="ThreeDots" color="black" height={40} width={40} /></div>:
            <React.Fragment>
            <IconCarousel />
            <div className="container">
            <div className="container mt-3 bg-light round">
            <Global global={global}/>
            </div>
            <div className="container mt-3 bg-light round">
                <ScrollAnimation animateIn="fadeIn">
                    <Country />
                </ScrollAnimation>
            </div>
            </div>
            <ScrollAnimation animateIn="fadeIn">
                <News />
            </ScrollAnimation>
            <Footer />
            </React.Fragment>
            }
        </React.Fragment>
    )
}




