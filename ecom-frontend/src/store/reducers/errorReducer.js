const initalState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  categoryLoader: false,
  categoryError: false,
  categoryErrorMessage: "",
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
    case "FETCH_CATEGORY_SUCCESS":
      return {
        ...state,
        categoryLoader: false,
        categoryError: false,
        categoryErrorMessage: "",
      };
    case "FETCH_CATEGORY_FAILURE":
      return {
        ...state,
        categoryLoader: false,
        categoryError: true,
        categoryErrorMessage: action.payload,
      };
    default:
      return state;
  }
};
