import { Badge, Colors } from 'react-foundation';
import './risk-selector.styles.css';

export const RiskSelector = (props) => (
  <div className="risk-selector">
    Please select a Risk Level for your Investment Portfolio
    <ul>
      {
        props.riskValues.map(risk => 
          <Badge
            key={risk+1}
            className="risk" 
            color={Colors.WARNING}
            onClick={() => props.onClick(risk)}
          >
            { risk + 1}
          </Badge>
        )
      }
    </ul>
  </div>
);