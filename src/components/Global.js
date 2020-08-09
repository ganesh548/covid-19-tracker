import React from 'react'
import SubGlobal from './SubGlobal'
import HorizontalMenu from './HorizontalMenu'



function Global(props) {
            const { global }=props;
            const data={
            cases:global.cases,
            deaths:global.deaths,
            active:global.active,
            recovered:global.recovered}
            
            return(
                    <div className="card brnone bg-light">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-3" ><i className="fas fa-globe mr-1"></i>Global Data</h5>
                            <div className="row card-deck" >
                                <SubGlobal heading="Cases" color="text-danger" number={global.cases} />
                                <hr className="mx-4 lg-display-none" />
                                <SubGlobal heading="Active" color="text-warning" number={global.active} />
                                <hr className="mx-4 " />
                                <SubGlobal heading="Deaths" color="text-green" number={global.deaths} />
                                <hr className="mx-4 lg-display-none" />
                            <SubGlobal heading="Recovered" color="text-success" number={global.recovered} />   
                            </div>
                        </div>
                        <div className="mt-3 mb-3">
                            <HorizontalMenu name="global" data={data}/>
                        </div>
                    </div>
                )
}
        
export default Global;
