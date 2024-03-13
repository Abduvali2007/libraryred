let initState = {
  tip: false,
  products: [],
};
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN":
      return { ...state, tip: action.payload };
    case "CLOSE":
      return { ...state, tip: action.payload };
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};
