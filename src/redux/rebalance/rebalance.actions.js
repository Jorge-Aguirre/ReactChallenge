export const setIdealConfig = config => ({
  type: 'SET_IDEAL_CONFIG',
  payload: config
});
export const setCurrentBonds = bonds => ({
  type: 'SET_CURRENT_BONDS',
  payload: bonds
});
export const setCurrentLargeCap = largeCap => ({
  type: 'SET_CURRENT_LARGECAP',
  payload: largeCap
});
export const setCurrentMidCap = midCap => ({
  type: 'SET_CURRENT_MIDCAP',
  payload: midCap
});
export const setCurrentForeign = foreign => ({
  type: 'SET_CURRENT_FOREIGN',
  payload: foreign
});
export const setCurrentSmallCap = smallCap => ({
  type: 'SET_CURRENT_SMALLCAP',
  payload: smallCap
});
export const updateValues = values => ({
  type: 'UPDATE_VALUES',
  payload: values
})