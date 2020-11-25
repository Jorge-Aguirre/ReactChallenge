import React from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { SelectRiskPage } from './pages/select-risk.component';
import RebalanceInvestmentsPage from './pages/rebalance-investments.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      riskValues: [...Array(10).keys()],
      selectedRisk: null,
      isDonutChartViewSelected: false
    }
  }

  selectRisk = risk => {
    this.setState({
      selectedRisk: risk
    });
  }

  swithToDonutChart = () => {
    this.setState({
      isDonutChartViewSelected: !this.state.isDonutChartViewSelected
    })
  }

  goToRebalancePage = () => {
    this.props.history.push('/rebalance')
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
                riskValues={this.state.riskValues} 
                selectedRisk={this.state.selectedRisk}
                isDonutChartViewSelected={this.state.isDonutChartViewSelected}
                selectRisk={this.selectRisk}
                goToRebalancePage={this.goToRebalancePage}
                swithToDonutChart={this.swithToDonutChart}
              />
            } 
          />
          <Route 
            exact path='/rebalance' 
            render={props =>
              this.state.selectedRisk ? 
                <RebalanceInvestmentsPage
                  {...props}
                  selectedRisk={this.state.selectedRisk}
                />
              : (<Redirect to='/' />)
            }
          />
        </Switch>


      </div>
    );
  }
}

export default withRouter(App);
