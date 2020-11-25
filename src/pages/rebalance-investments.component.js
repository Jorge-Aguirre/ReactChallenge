import React from 'react';
import { Button, Colors } from 'react-foundation';
import data from '../data/ideal-risk-balance';
import { connect } from 'react-redux';
import { setIdealConfig } from '../redux/rebalance/rebalance.actions';

import './rebalance-investments.styles.css';

class RebalanceInvestmentsPage extends React.Component {
  componentDidMount() {
    const { setIdealConfig } = this.props;

    const filteredData = data.find(row => row.Risk === this.props.selectedRisk);
    
    setIdealConfig(filteredData);
  }

  handleBlur = event => {
    switch (event.target.dataset.field) {
      case 'Bonds':
        this.setState(prevState => ({
          current: {
            ...prevState.current,
            bonds: event.target.value
          }
        }));
        break;
      case 'LargeCap':
        this.setState(prevState => ({
          current: {
            ...prevState.current,
            largeCap: event.target.value
          }
        }));
        break;
      case 'MidCap':
        this.setState(prevState => ({
          current: {
            ...prevState.current,
            midCap: event.target.value
          }
        }));
        break;
      case 'Foreign':
        this.setState(prevState => ({
          current: {
            ...prevState.current,
            foreign: event.target.value
          }
        }));
        break;
      case 'SmallCap': {
        this.setState(prevState => ({
          current: {
            ...prevState.current,
            smallCap: event.target.value
          }
        }));
        break;
      }
    }
  }

  areFieldsFilled = () => {
    /*
    return this.state.current.bonds.length 
      && this.state.current.largeCap.length
      && this.state.current.midCap.length
      && this.state.current.foreign.length
      && this.state.current.smallCap.length 
      */
  }

  suggestTransfers = () => {
    const sum = Object.keys(this.state.current).reduce((sum, key) => sum + parseInt(this.state.current[key] || 0), 0);
    const riskConfig = data.find(row => row.Risk === this.props.selectedRisk);

    this.setState(prevState => ({
      difference: {
        ...prevState.difference,
        bonds: (sum * riskConfig.Bonds / 100) - this.state.current.bonds,
        largeCap: (sum * riskConfig.LargeCap / 100) - this.state.current.largeCap,
        midCap: (sum * riskConfig.MidCap / 100) - this.state.current.midCap,
        foreign: (sum * riskConfig.Foreign / 100) - this.state.current.foreign,
        smallCap: (sum * riskConfig.SmallCap / 100) - this.state.current.smallCap
      }
    }))
  }

  fillDiferences = () => [
    
  ]

  render () {
    return (
      <div className='content'>
          <h5>Risk Level Selected: {this.props.selectedRisk}</h5>
          <table>
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
          <div className='rebalance-section'>
            <h5>Please Enter your current Portfolio</h5>
            <Button 
              color={Colors.WARNING} 
              disabled={!this.areFieldsFilled()}
              onClick={this.suggestTransfers}
            >
              Rebalance
            </Button>
          </div>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Current Amount</th>
                <th>Difference</th>
                <th>New Amount</th>
                <th>Recomended Transfers</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.entries(
                  data
                    .find(row => row.Risk === this.props.selectedRisk)
                ).filter(entry => entry[0] !== 'Risk')
                .map((o, idx) => (
                  <tr key={o[0]}>
                    <td>{o[0]} $:</td>
                    <td><input data-field={o[0]} type='text' onBlur={this.handleBlur} required /></td>
                    <td><input data-field={o[0]} type='text' disabled /></td>
                    <td><input data-field={o[0]} type='text' disabled /></td>
                    {idx === 0 ? (<td rowSpan="5"><input className='movements' type='textarea' disabled/></td>) : null}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setIdealConfig: config => dispatch(setIdealConfig(config))
})

const mapStateToProps = state => ({
  selectedRisk: state.risk.selectedRisk
});

export default connect(mapStateToProps, mapDispatchToProps)(RebalanceInvestmentsPage);