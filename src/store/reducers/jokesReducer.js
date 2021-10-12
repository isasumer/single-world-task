const initialState = {
  animal: [],
  travel: [],
  sport: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "animal":
      return {
        ...state,
        animal: [action.payload, ...state.animal],
        loading: false,
      };
    case "travel":
      return {
        ...state,
        travel: [action.payload, ...state.travel],
        loading: false,
      };
    case "sport":
      return {
        ...state,
        sport: [action.payload, ...state.sport],
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
