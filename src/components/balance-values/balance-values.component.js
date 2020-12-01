import React from 'react';
import SuggestedTransfer from '../suggested-transfers/suggested-transfers.component';

import './balance-values.styles.css';

const BalanceValues = ({ name, value, handleBlur, renderRowSpan }) => (
  <tr>
    <td>{name}</td>
    <td>
      <input 
        type='text'
        onBlur={handleBlur} 
      />
    </td>
    <td>
      <input 
        type='text'
        className={`${value.difference ? value.difference > 0 ? 'positive' : 'negative' : ''}`}
        value={value.difference}
        readOnly
        disabled
      />
    </td>
    <td>
      <input 
        type='text' 
        value={value.newAmount}
        readOnly
        disabled
      />
    </td>
    {renderRowSpan ? (<SuggestedTransfer />) : null}
  </tr>
);

export default BalanceValues;