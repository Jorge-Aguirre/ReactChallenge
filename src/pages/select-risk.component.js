import React from 'react';
import { RiskSelector } from '../components/risk-selector/risk-selector.component';
import { RecomendedPortfolio } from '../components/recommended-portfolio/recomended-portfolio.component';
import { Button, Colors } from 'react-foundation';

import './select-risk.styles.css';
import { DonutChartPortfolio } from '../components/donut-chart/donut-chart.component';

export const SelectRiskPage = ({ riskValues, selectedRisk, isDonutChartViewSelected, selectRisk, swithToDonutChart, goToRebalancePage }) => (
  <div className='content'>
    <RiskSelector
      riskValues={riskValues}
      selectedRisk={selectedRisk}
      onClick={(i) => selectRisk(i+1)}
    />
    {
      isDonutChartViewSelected ? 
        <DonutChartPortfolio selectedRisk={selectedRisk} /> :
        <RecomendedPortfolio selectedRisk={selectedRisk} />
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
            onClick={goToRebalancePage}
          >
            Rebalance
          </Button>
        </div> : ''
    }
  </div>
);

