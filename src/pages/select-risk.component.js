import React from 'react';
import RiskSelector from '../components/risk-selector/risk-selector.component';
import RecomendedPortfolio from '../components/recommended-portfolio/recomended-portfolio.component';
import DonutChartPortfolio  from '../components/donut-chart/donut-chart.component';
import { Button, Colors } from 'react-foundation';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './select-risk.styles.css';

const SelectRiskPage = ({ riskValues, selectedRisk, isDonutChartViewSelected, selectRisk, swithToDonutChart, goToRebalancePage }) => {
  const history = useHistory();

  return (
    <div className='content'>
      <RiskSelector
        riskValues={riskValues}
        selectedRisk={selectedRisk}
        onClick={(i) => selectRisk(i+1)}
      />
      {
        isDonutChartViewSelected ? 
          <DonutChartPortfolio /> :
          <RecomendedPortfolio />
      }
      {
        selectedRisk ?
          <div>
            <Button 
              className='action-button' 
              color={Colors.WARNING}
              onClick={swithToDonutChart}
            >
              See {isDonutChartViewSelected ? 'Table' : 'Donut'} Chart
            </Button>
            <Button
              className='action-button'
              color={Colors.SECONDARY}
              onClick={() => history.push('/rebalance')}
            >
              Rebalance
            </Button>
          </div> : ''
      }
    </div>
  );
}

const mapStateToProps = state => ({
  selectedRisk: state.risk.selectedRisk
})

export default connect(mapStateToProps)(SelectRiskPage);