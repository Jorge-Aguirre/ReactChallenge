const INITIAL_STATE = {
  idealConfig: null
}

const rebalanceReducer = (state = INITIAL_STATE, action) => {
  console.log('rebalance reducer');
  switch(action.type) {
    case 'SET_IDEAL_CONFIG':
      return {
        ...state,
        idealConfig: action.payload
      }
    default:
      return state
  }
}

export default rebalanceReducer;