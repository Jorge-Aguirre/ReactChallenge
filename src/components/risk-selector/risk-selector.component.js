import { Badge, Colors } from 'react-foundation';
import './risk-selector.styles.css';

const RiskSelector = (props) => (
  <div className="risk-selector">
    <ul>
      {
        props.riskValues.map(risk => 
          <Badge
            key={risk+1}
            className={`${(props.selectedRisk===risk+1) ? 'selected' : ''} risk`}
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

export default RiskSelector;