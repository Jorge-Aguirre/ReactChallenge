import React from 'react';
import{ connect } from 'react-redux';
import customRound from '../../utils';

import './suggested-transfers.styles.css';

const SuggestedTransfer = ({bonds, largeCap, midCap, foreign, smallCap, customClassName}) => {
  const buildTransfer = () => {
    let transfers = [];

    if (bonds && largeCap && midCap && foreign && smallCap) {
      let sorted = [ 
        { key: 'Bonds', value: bonds }, 
        { key: 'Large Cap', value: largeCap }, 
        { key: 'Mid Cap', value: midCap }, 
        { key: 'Foreign', value: foreign }, 
        { key: 'Small Cap', value: smallCap } 
      ].sort((a, b) => a.value - b.value );

      while (sorted.some(o => o.value !== 0 )) {
        let minValue = sorted[0].value * (-1);
        let maxValue = sorted[sorted.length - 1].value;
        let transferAmount;
        let from = sorted[0].key
        let to = sorted[sorted.length - 1].key;

        if (minValue >= maxValue) {
          transferAmount = sorted[sorted.length - 1].value;
          sorted[0].value = customRound((minValue - maxValue) * -1);
          sorted[sorted.length - 1].value = 0;
          sorted.splice(sorted.length - 1, 1);
        } else {
          transferAmount = (sorted[0].value * -1);
          sorted[0].value = 0;
          sorted[sorted.length - 1].value = customRound(maxValue - minValue);
          sorted.splice(0, 1)
        }

        transfers.push(`Transfer \$${transferAmount} from ${from} to ${to}`);
        sorted.sort((a, b) => a.value - b.value);
      }
    }

    return transfers;
  }

  return (
    <div className={`${customClassName} movements`}>
      {
        buildTransfer().map((t, idx) => <li key={idx}>{t}</li>)
      }
    </div>
  )
}

const mapStateToProps = state => ({
    bonds: state.rebalanced.Bonds.difference,
    largeCap: state.rebalanced.LargeCap.difference,
    midCap: state.rebalanced.MidCap.difference,
    foreign: state.rebalanced.Foreign.difference,
    smallCap: state.rebalanced.SmallCap.difference
});

export default connect(mapStateToProps)(SuggestedTransfer);