import React from 'react';
import { RiskSelector } from '../components/risk-selector/risk-selector.component';
import { RecomendedPortfolio } from '../components/recommended-portfolio/recomended-portfolio.component';

export const SelectRiskPage = ({ riskValues, selectedRisk, handleClick }) => (
  <div className='content'>
    <RiskSelector
      riskValues={riskValues}
      selectedRisk={selectedRisk}
      onClick={(i) => handleClick(i+1)}
    />
    <RecomendedPortfolio selectedRisk={selectedRisk} />
  </div>
);

