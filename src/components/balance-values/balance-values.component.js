import React from 'react';

import './balance-values.styles.css';

const BalanceValues = ({ name, value, handleBlur, renderRowspan }) => (
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
    {renderRowspan ? (<td rowSpan="5"><input className='movements' type='textarea' disabled/></td>) : null}
  </tr>
);

export default BalanceValues;