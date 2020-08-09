import React, { Component } from 'react'
import {Pie} from 'react-chartjs-2';


class Pies extends Component {  
  render() {
    const { cases, deaths, active, recovered}=this.props.data

    const data = {
            labels: [
            '- cases',
            '- active',
            '- deaths',
            '- recovered'
            ],
            datasets: [{
        data: [cases, active, deaths, recovered],
        backgroundColor: [
        '#e30000',
        '#ffea05',
        '#5e5e57',
        '#2ede07'
        ],
        hoverBackgroundColor: [
            '#e30000',
            '#ffea05',
            '#5e5e57',
            '#2ede07'
        ]
        }]
    };
    return (
      <div>
        <Pie data={data} width={150} height={250}/>
      </div>
    );
  }
}

export default Pies