import React from 'react';
import SuggestedTransfer from '../suggested-transfers/suggested-transfers.component';

import './balance-values.styles.css';

const BalanceValues = ({ name, value, handleBlur, renderRowSpan }) => (
  <tr className='rebalanced-table-tr'>
    <td className='rebalanced-table-td'>{name}</td>
    <td className='rebalanced-table-td'>
      <input 
        type='text'
        onBlur={handleBlur} 
      />
    </td>
    <td className='rebalanced-table-td'>
      <input 
        type='text'
        className={`${value.difference ? value.difference > 0 ? 'positive' : 'negative' : ''}`}
        value={value.difference}
        readOnly
        disabled
      />
    </td>
    <td className='rebalanced-table-td'>
      <input 
        type='text' 
        value={value.newAmount}
        readOnly
        disabled
      />
    </td>
    {renderRowSpan ? (
      <td className="rebalanced-table-td suggested-transfers" rowSpan="5" >
        <SuggestedTransfer customClassName="normal" />
      </td>
    ) : null}
  </tr>
);

export default BalanceValues;