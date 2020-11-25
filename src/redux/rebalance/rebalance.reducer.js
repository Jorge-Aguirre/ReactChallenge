const INITIAL_STATE = {
  idealConfig: null,
  Bonds: {
    current: null,
    difference: null,
    newAmount: null,
  },
  LargeCap: {
    current: null,
    difference: null,
    newAmount: null,
  },
  MidCap: {
    current: null,
    difference: null,
    newAmount: null,
  },
  Foreign: {
    current: null,
    difference: null,
    newAmount: null,
  },
  SmallCap: {
    current: null,
    difference: null,
    newAmount: null,
  },
}

const rebalanceReducer = (state = INITIAL_STATE, action) => {
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