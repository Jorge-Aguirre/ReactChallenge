const INITIAL_STATE = {
  idealConfig: null,
  Bonds: {
    current: '',
    difference: '',
    newAmount: '',
  },
  LargeCap: {
    current: '',
    difference: '',
    newAmount: '',
  },
  MidCap: {
    current: '',
    difference: '',
    newAmount: '',
  },
  Foreign: {
    current: '',
    difference: '',
    newAmount: '',
  },
  SmallCap: {
    current: '',
    difference: '',
    newAmount: '',
  },
}

const rebalancedReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_IDEAL_CONFIG':
      return {
        ...state,
        idealConfig: action.payload
      }
    case 'SET_CURRENT_BONDS':
      return {
        ...state,
        Bonds:{
          ...state.Bonds,
          current: action.payload
        }
      }
    case 'SET_CURRENT_LARGE_CAP':
      return {
        ...state,
        LargeCap:{
          ...state.LargeCap,
          current: action.payload
        }
      }
    case 'SET_CURRENT_MID_CAP':
      return {
        ...state,
        MidCap:{
          ...state.MidCap,
          current: action.payload
        }
      }
    case 'SET_CURRENT_FOREIGN':
      return {
        ...state,
        Foreign:{
          ...state.Foreign,
          current: action.payload
        }
      }
    case 'SET_CURRENT_SMALL_CAP':
      return {
        ...state,
        SmallCap:{
          ...state.SmallCap,
          current: action.payload
        }
      }
    case 'UPDATE_VALUES':
      return {
        ...state,
        Bonds: {
          ...state.Bonds,
          difference: action.payload.Bonds.difference,
          newAmount: action.payload.Bonds.newAmount
        },
        LargeCap: {
          ...state.LargeCap,
          difference: action.payload.LargeCap.difference,
          newAmount: action.payload.LargeCap.newAmount
        },
        MidCap: {
          ...state.MidCap,
          difference: action.payload.MidCap.difference,
          newAmount: action.payload.MidCap.newAmount
        },
        Foreign: {
          ...state.Foreign,
          difference: action.payload.Foreign.difference,
          newAmount: action.payload.Foreign.newAmount
        },
        SmallCap: {
          ...state.SmallCap,
          difference: action.payload.SmallCap.difference,
          newAmount: action.payload.SmallCap.newAmount
        },
      }
    default:
      return state
  }
}

export default rebalancedReducer;