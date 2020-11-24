import React from 'react';
import data from '../../data/ideal-risk-balance';


import './recomended-portfolio.styles.css';

export const RecomendedPortfolio = (props) => (
  <table>
    <thead>
      <tr>
        {Object.keys(data[0]).map(key => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {
        data.map(entry => (
          <tr className={`${props.selectedRisk===entry.Risk ? 'selected': ''}`} key={entry.Risk}>
            {
              Object.entries(entry).map(o => (
                <td key={o[0]}>{o[1]}</td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
)