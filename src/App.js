import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SelectRiskPage from './pages/select-risk.component';
import RebalanceInvestmentsPage from './pages/rebalance-investments.component';
import { connect } from 'react-redux';
import { setRiskSelection, switchView } from './redux/risk/risk.actions';

class App extends React.Component {
  selectRisk = risk => {
    const { setRiskSelection } = this.props;

    setRiskSelection(risk);
  }

  swithToDonutChart = () => {
    const { switchView } = this.props;

    switchView(!this.props.isDonutChartViewSelected);
  }

  render() {
    return (
      <div className="App">
        <div className="advisor">
          <div className="title">
            <h1>Financial Advisor</h1>
          </div>
        </div>
        <Switch>
          <Route 
            exact path='/' 
            render={props => 
              <SelectRiskPage 
                {...props} 
                riskValues={this.props.riskValues} 
                selectedRisk={this.props.selectedRisk}
                isDonutChartViewSelected={this.props.isDonutChartViewSelected}
                selectRisk={this.selectRisk}
                swithToDonutChart={this.swithToDonutChart}
              />
            } 
          />
          <Route path='/rebalance' component={RebalanceInvestmentsPage} />
        </Switch>


      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setRiskSelection: risk => dispatch(setRiskSelection(risk)),
  switchView: value => dispatch(switchView(value)),
})

const mapStateToProps = state => ({
  riskValues: state.risk.riskValues,
  isDonutChartViewSelected: state.risk.isDonutChartViewSelected
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
