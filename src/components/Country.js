import React, { Component } from 'react'
import SubCountry from './SubCountry'
import axios from "axios"
import HorizontalMenu from './HorizontalMenu'
import classnames from'classnames'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

   

class Country extends Component {
    constructor(props) {
        super(props)
        this.state = {
             countryName:'',
             country:{},
             error:'',
             loading:false,
             error_:'',
             countryFlag:''
        }
    }
    
    changeHandler = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = e =>{
        e.preventDefault()
        this.setState({
            loading:true
        })
        if(this.state.countryName === ''){
            this.setState({
                error:'This field is required'
            })
            return
        }
        else{
            this.setState({
                error:''
            })
        }
        axios.get(`https://corona.lmao.ninja/v3/covid-19/countries/${this.state.countryName}`)
        .then(res=>{
            this.setState({
                country:res.data,
                countryName:'',
                loading:false,
                countryFlag:res.data.countryInfo.flag,
                error_:''
            })
            
        })
        .catch(error=>{
            this.setState({
                error_:'Invalid Country name!!',
                loading:false
            })
        })
        window.location.href = '#button';
    }

    componentDidMount()
    {
        axios.get('https://corona.lmao.ninja/v3/covid-19/countries/india')
        .then(res=>{
            this.setState({
                country:res.data,
                countryFlag:res.data.countryInfo.flag
            })
        })
        .catch(error=>{
                console.log(error)
        
        })
        
    }
    
    
    render() {
        const { countryName }=this.state
        const { country }=this.state;
        const data={
        cases:country.cases,
        deaths:country.deaths,
        active:country.active,
        recovered:country.recovered}
        return( 
                <div className="card brnone bg-light" id="single">
                    <div className="card-body">
                    <h5 className="card-title text-center mb-3" ><i className="fas fa-map-marked-alt fa-1x mr-1"></i>Country Wise Data</h5>
                    <div className="container">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Try for different countries</label>
                                <input value={countryName} name="countryName" onChange={this.changeHandler} type="text" className={classnames('form-control',{'is-invalid':this.state.error})} id="formGroupExampleInput" placeholder="Country name here..." />
                                {this.state.error && <div className="invalid-feedback">
                                    {this.state.error}
                                </div>}
                            </div>
                            <div className="form-group mx-auto">
                                <button type="submit" className="btn btn-lg btn-block   btn-primary" >Get Data</button>
                                <span id="button"></span>   
                            </div>
                        </form>
                        </div>
                    </div>
                    { this.state.loading ? <div className="text-center mt-4"><Loader type="ThreeDots" color="black" height={40} width={40} /></div>:
                    this.state.error_ ? <div class="alert alert-danger" role="alert">{this.state.error_}</div>:
                    <React.Fragment>
                    <div className="card-body">
                    <h5 className="card-subtitle text-center mb-3" id="country"><div className="md-row mb-2"><img src={this.state.countryFlag} className="img-fluid img-thumbnail mr-2 bg-light" alt="Country flag" style={{maxWidth:'30%'}} /></div>{country.country}</h5>
                    <div className="row card-deck" >
                        <SubCountry heading="Cases" color="text-danger" number={country.cases}  />
                        <hr className="mx-4 lg-display-none" />
                        <SubCountry heading="Active" color="text-warning" number={country.active} />
                        <hr className="mx-4 lg-display-none" />
                        <SubCountry heading="Deaths" color="text-dark" number={country.deaths} />
                        <hr className="mx-4 " />
                        <SubCountry heading="Recovered" color="text-success" number={country.recovered} />
                    </div>
                    </div>
                <div className="mt-3 mb-3">
                <HorizontalMenu name={`${country.country}'s`} data={data}/>
                </div>
                </React.Fragment>
            }
            {this.state.error ? <React.Fragment><br/>
            <br/>
            <br/>    
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </React.Fragment>:<React.Fragment></React.Fragment>} 
            </div>)
                 
    }
}

export default Country
