const CitiesReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_CITIES':
      return action.playload;
    default:
      return state;
  }
};
export default CitiesReducer;
