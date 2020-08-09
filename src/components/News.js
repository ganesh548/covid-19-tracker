import React, { Component } from 'react'
import axios from 'axios';
import Info from './Info'
import { Element } from 'react-scroll'



export default class News extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             news:[],
             NEWS_API:process.env.REACT_APP_NEWS_API_KEY,
        }
    }
    componentDidMount(){
        axios.get(`https://api.breakingapi.com/news?q=covid&type=everything&locale=en-IN&time_period=last_day&sort_by=date_published&output=json&api_key=${this.state.NEWS_API}`)
        .then(res=>{
           
            this.setState({
                
                news:res.data.articles
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        const { news }=this.state 
        return (
                <div className="container mt-3 mb-4 round_">
                    <div className="card round_">
                        <div className="card-header" id="news">Covid-19 News</div>
                        <Element className="element" id="containerElement" style={{
                        position: 'relative',
                        height: '360px',
                        overflow: 'scroll',
                        }}> 
                        {news.map(article=><Info value={article} key={article.link}/>)}
                        </Element>
                    </div>  
                </div>
            
            
        )
    }
}
