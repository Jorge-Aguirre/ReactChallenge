import { React } from "react";
import DonutChart from 'react-donut-chart';
import data from '../../data/ideal-risk-balance';

import './donut-chart.styles.css';

export const DonutChartPortfolio = (props) => (
  //console.log(Object.entries(data.find(entry => entry.Risk === props.selectedRisk))),
  <div className='wrap-donut-chart'>
    <DonutChart
      data={
        Object
          .entries(data.find(entry => entry.Risk === props.selectedRisk))
          .filter(entry => entry[0] !== 'Risk')
          .map(entry => {
            return {
              label: entry[0],
              value: entry[1]
            }
          })
      }
      legend={false}
      width={450}
      height={450}
    />
  </div>
)