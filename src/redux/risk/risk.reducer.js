const INITIAL_STATE = {
  selectedRisk: null,
  riskValues: [...Array(10).keys()],
  isDonutChartViewSelected: false
}

const riskReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_RISK_SELECTION':
      return {
        ...state,
        selectedRisk: action.payload
      }
    case 'SWITCH_VIEW':
      return {
        ...state,
        isDonutChartViewSelected: action.payload
      }
    default:
      return state;
  }
}

export default riskReducer;