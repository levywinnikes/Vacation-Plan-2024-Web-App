const INITIAL_STATE = {
  vacations: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_VACATIONS":
      return {
        ...state,
        vacations: action.vacations,
      };

    default:
      return state;
  }
}
