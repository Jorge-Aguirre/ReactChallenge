import React from 'react';
import RiskSelector from '../components/risk-selector/risk-selector.component';
import RecommendedPortfolio from '../components/recommended-portfolio/recommended-portfolio.component';
import DonutChartPortfolio  from '../components/donut-chart/donut-chart.component';
import { Button, Colors } from 'react-foundation';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './select-risk.styles.css';

const SelectRiskPage = ({ riskValues, selectedRisk, isDonutChartViewSelected, selectRisk, switchToDonutChart }) => {
  const history = useHistory();

  return (
    <div className='content'>
      Please select a Risk Level for your Investment Portfolio
      <h5>Risk Level Selected: {selectedRisk}</h5>
      <div className='panel'>
        <RiskSelector
          riskValues={riskValues}
          selectedRisk={selectedRisk}
          onClick={(i) => selectRisk(i+1)}
        />
        {
          isDonutChartViewSelected ? 
            <DonutChartPortfolio /> :
            <RecommendedPortfolio />
        }
      </div>

      {
        selectedRisk ?
          <div>
            <Button 
              className='action-button' 
              color={Colors.WARNING}
              onClick={switchToDonutChart}
            >
              See {isDonutChartViewSelected ? 'Table' : 'Donut'} Chart
            </Button>
            <Button
              className='action-button'
              color={Colors.SECONDARY}
              onClick={() => history.push('/rebalanced')}
            >
              Rebalanced
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