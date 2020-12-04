import React from 'react';
import { Button, Colors } from 'react-foundation';
import data from '../data/ideal-risk-balance';
import { connect } from 'react-redux';
import { setIdealConfig, setCurrentBonds, setCurrentLargeCap,
         setCurrentMidCap, setCurrentForeign, setCurrentSmallCap,
         updateValues } from '../redux/rebalanced/rebalanced.actions';
import BalanceValues from '../components/balance-values/balance-values.component';
import SuggestedTransfer from '../components/suggested-transfers/suggested-transfers.component';

import './rebalanced-investments.styles.css';

class RebalancedInvestmentsPage extends React.Component {
  componentDidMount() {
    const { setIdealConfig } = this.props;

    const filteredData = data.find(row => row.Risk === this.props.selectedRisk);
    
    setIdealConfig(filteredData);
  }

  handleBondsBlur = event => {
    let reg = /^\d+$/;
    if (event.target.value.match(reg)) {
      const { setCurrentBonds } = this.props;

      setCurrentBonds(event.target.value);
    } else {
      event.target.value = '';
      alert('Please input only positive numeric values');
    }

  }
  handleLargeCapBlur = event => {
    let reg = /^\d+$/;
    if (event.target.value.match(reg)) {
      const { setCurrentLargeCap } = this.props;

      setCurrentLargeCap(event.target.value);
    } else {
      event.target.value = '';
      alert('Please input only positive numeric values');
    }
  }
  handleMidCapBlur = event => {
    let reg = /^\d+$/;
    if (event.target.value.match(reg)) {
      const { setCurrentMidCap } = this.props;

      setCurrentMidCap(event.target.value);
    } else {
      event.target.value = '';
      alert('Please input only positive numeric values');
    }
  }
  handleForeignBlur = event => {
    let reg = /^\d+$/;
    if (event.target.value.match(reg)) {
      const { setCurrentForeign } = this.props;

      setCurrentForeign(event.target.value);
    } else {
      event.target.value = '';
      alert('Please input only positive numeric values');
    }
  }
  handleSmallCapBlur = event => {
    let reg = /^\d+$/;
    if (event.target.value.match(reg)) {
      const { setCurrentSmallCap } = this.props;

      setCurrentSmallCap(event.target.value);
    } else {
      event.target.value = '';
      alert('Please input only positive numeric values');
    }
  }

  areCurrentFieldsFilled = () => {
    return this.props.bonds.current.length
      && this.props.largeCap.current.length
      && this.props.midCap.current.length
      && this.props.foreign.current.length
      && this.props.smallCap.current.length
  }

  suggestTransfers = () => {
    const sum = parseInt(this.props.bonds.current) 
      + parseInt(this.props.largeCap.current)
      + parseInt(this.props.midCap.current)
      + parseInt(this.props.foreign.current)
      + parseInt(this.props.smallCap.current);

    const bondsDifference = (sum * this.props.idealConfig.Bonds / 100) - this.props.bonds.current;
    const largeCapDifference = (sum * this.props.idealConfig.LargeCap / 100) - this.props.largeCap.current;
    const midCapDifference = (sum * this.props.idealConfig.MidCap / 100) - this.props.midCap.current;
    const foreignDifference = (sum * this.props.idealConfig.Foreign / 100) - this.props.foreign.current;
    const smallCapDifference = (sum * this.props.idealConfig.SmallCap / 100) - this.props.smallCap.current;

    const Bonds = {
      difference: Math.round(bondsDifference * 100) / 100,
      newAmount: parseInt(this.props.bonds.current) + bondsDifference
    };

    const LargeCap = {
      difference: Math.round(largeCapDifference * 100) / 100,
      newAmount: parseInt(this.props.largeCap.current) + largeCapDifference
    }

    const MidCap = {
      difference: Math.round(midCapDifference * 100) / 100,
      newAmount: parseInt(this.props.midCap.current) + midCapDifference
    }

    const Foreign = {
      difference: Math.round(foreignDifference * 100) / 100,
      newAmount: parseInt(this.props.foreign.current) + foreignDifference
    }

    const SmallCap = {
      difference: Math.round(smallCapDifference * 100) / 100,
      newAmount: parseInt(this.props.smallCap.current) + smallCapDifference
    }

    const { updateValues } = this.props;

    updateValues({
      Bonds,
      LargeCap,
      MidCap,
      Foreign,
      SmallCap
    });
  }

  render () {
    return (
      <div className='rebalanced-content'>
          <h5>Risk Level Selected: {this.props.selectedRisk}</h5>
          <table className='current-risk'>
            <thead>
              <tr>
                {
                  Object.keys(data
                    .find(row => row.Risk === this.props.selectedRisk)
                  )
                    .filter(row => row !== 'Risk')
                    .map(key => (
                      <th key={key}>{key}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.entries(
                    data
                      .find(row => row.Risk === this.props.selectedRisk)
                  ).filter(entry => entry[0] !== 'Risk')
                  .map(o => (<td key={o[0]}>{o[1]}%</td>))
                }
              </tr>
            </tbody>
          </table>
          <div className='wrapper'>
            <div className='rebalanced-section'>
              <h5>Please Enter your current Portfolio</h5>
              <Button 
                color={Colors.WARNING}
                disabled={!this.areCurrentFieldsFilled()}
                onClick={this.suggestTransfers}
              >
                Rebalanced
              </Button>
            </div>

            <table className='rebalanced-table'>
              <thead className='rebalanced-table-head'>
                <tr className='rebalanced-table-tr'>
                  <th className='rebalanced-table-th'></th>
                  <th className='rebalanced-table-th'>Current Amount</th>
                  <th className='rebalanced-table-th'>Difference</th>
                  <th className='rebalanced-table-th'>New Amount</th>
                  <th className='rebalanced-table-th'>Recommended Transfers</th>
                </tr>
              </thead>
              <tbody className='rebalanced-table-body'>
                <BalanceValues name='Bonds $:' value={this.props.bonds} handleBlur={this.handleBondsBlur} renderRowSpan />
                <BalanceValues name='Large Cap $:' value={this.props.largeCap} handleBlur={this.handleLargeCapBlur}  />
                <BalanceValues name='Mid Cap $:' value={this.props.midCap} handleBlur={this.handleMidCapBlur}  />
                <BalanceValues name='Foreign $:' value={this.props.foreign} handleBlur={this.handleForeignBlur}  />
                <BalanceValues name='Small Cap $:' value={this.props.smallCap} handleBlur={this.handleSmallCapBlur}  />
                <SuggestedTransfer customClassName="mobile" />
              </tbody>
            </table>

            
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setIdealConfig: config => dispatch(setIdealConfig(config)),
  setCurrentBonds: bonds => dispatch(setCurrentBonds(bonds)),
  setCurrentLargeCap: largeCap => dispatch(setCurrentLargeCap(largeCap)),
  setCurrentMidCap: midCap => dispatch(setCurrentMidCap(midCap)),
  setCurrentForeign: foreign => dispatch(setCurrentForeign(foreign)),
  setCurrentSmallCap: smallCap => dispatch(setCurrentSmallCap(smallCap)),
  updateValues: obj => dispatch(updateValues(obj)),
})

const mapStateToProps = state => ({
  selectedRisk: state.risk.selectedRisk,
  idealConfig: state.rebalanced.idealConfig,
  bonds: state.rebalanced.Bonds,
  largeCap: state.rebalanced.LargeCap,
  midCap: state.rebalanced.MidCap,
  foreign: state.rebalanced.Foreign,
  smallCap: state.rebalanced.SmallCap
});

export default connect(mapStateToProps, mapDispatchToProps)(RebalancedInvestmentsPage);