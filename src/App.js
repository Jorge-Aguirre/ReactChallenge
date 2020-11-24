import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { SelectRiskPage } from './pages/select-risk.component';
import { RebalanceInvestmentsPage } from './pages/rebalance-investments.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      riskValues: [...Array(10).keys()],
      selectedRisk: null,
    }
  }

  selectRisk = risk => {
    this.setState({
      selectedRisk: risk
    });
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
                handleClick={this.selectRisk}
              />} />
          <Route exact path='/rebalance' component={RebalanceInvestmentsPage} />
        </Switch>


      </div>
    );
  }
}

export default App;
