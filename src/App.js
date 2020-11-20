import React from 'react';
import './App.css';
import { RiskSelector } from './components/risk-selector/risk-selector.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      riskValues: [...Array(10).keys()],
    }
  }

  selectRisk(risk) {
    console.log(risk);
  }

  render() {
    return (
      <div className="App">
        <div className="advisor">
          <div className="title">
            <h1>Financial Advisor</h1>
          </div>
        </div>
        <RiskSelector
          riskValues={this.state.riskValues} 
          onClick={(i) => this.selectRisk(i)}
        />
      </div>
    );
  }
}

export default App;
