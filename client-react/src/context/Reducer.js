const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        farmeruser: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
				farmeruser: action.payload,
				isFetching: false,
				error: false,
			};
    case "LOGIN_FAILURE":
      return {
				errorMsg: action.payload,
				isFetching: false,
				error: true,
			};
      case "UPDATE_START":
        return {
          ...state,
          isFetching:true
        };
      case "UPDATE_SUCCESS":
        return {
					farmeruser: action.payload,
					isFetching: false,
					error: false,
				};
      case "UPDATE_FAILURE":
        return {
					farmeruser: state.farmeruser,
					isFetching: false,
					error: true,
				};
    case "LOGOUT":
      return {
				farmeruser: null,
				isFetching: false,
				error: false,
			};
    default:
      return state;
  }
};

export default Reducer;
