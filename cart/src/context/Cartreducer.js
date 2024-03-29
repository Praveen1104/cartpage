export const Cartreducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};
