import React from 'react';
import './App.css';
import { RiskSelector } from './components/risk-selector/risk-selector.component';
import { RecomendedPortfolio } from './components/recommended-portfolio/recomended-portfolio.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      riskValues: [...Array(10).keys()],
      selectedRisk: null,
    }
  }

  selectRisk(risk) {
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
        <div className='content'>
          <RiskSelector
            riskValues={this.state.riskValues}
            selectedRisk={this.state.selectedRisk}
            onClick={(i) => this.selectRisk(i+1)}
          />
          <RecomendedPortfolio selectedRisk={this.state.selectedRisk} />
        </div>
      </div>
    );
  }
}

export default App;
