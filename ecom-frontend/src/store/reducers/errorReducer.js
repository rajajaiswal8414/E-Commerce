const initalState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const errorReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: "",
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
