import React from 'react';
import { connect } from 'react-redux';
import data from '../../data/ideal-risk-balance';

import './recommended-portfolio.styles.css';

const RecommendedPortfolio = (props) => (
  <table className='risks-table'>
    <thead className='risks-table-head'>
      <tr className='risks-table-tr'>
        {
          Object.keys(data[0]).map(key => (
            <th className='risks-table-th' key={key}>{key}</th>
          ))
        }
      </tr>
    </thead>
    <tbody className='risks-table-body'>
      {
        data.map(entry => (
          <tr className={`${props.selectedRisk===entry.Risk ? 'selected': ''} risks-table-tr`} key={entry.Risk}>
            {
              Object.entries(entry).map(o => (
                <td className='risks-table-td' key={o[0]}>{o[1]}</td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  selectedRisk: state.risk.selectedRisk
})

export default connect(mapStateToProps)(RecommendedPortfolio);