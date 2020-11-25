import { React } from "react";
import DonutChart from 'react-donut-chart';
import data from '../../data/ideal-risk-balance';
import { connect } from 'react-redux';

import './donut-chart.styles.css';

const DonutChartPortfolio = (props) => (
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
);

const mapStateToProps = state => ({
  selectedRisk: state.risk.selectedRisk
});

export default connect(mapStateToProps)(DonutChartPortfolio);