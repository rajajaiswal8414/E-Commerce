const initialState = {
  cart: [],
  totalPrice: 0,
  cartId: null, // Often used for server-side persistence
};

// Helper function to calculate the total price of all items in the cart
const calculateTotal = (items) => {
  return items.reduce((acc, item) => {
    // Use specialPrice if available, otherwise use regular price
    const price = item.specialPrice || item.price;
    return acc + price * item.quantity;
  }, 0);
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const newItem = action.payload; // Contains {..., quantity: 1}
      const existingItem = state.cart.find(
        (item) => item.productId === newItem.productId
      );
      let updatedCart;

      if (existingItem) {
        // If item exists, increase its quantity (or just replace the entry if quantity is the updated total)
        updatedCart = state.cart.map((item) =>
          item.productId === existingItem.productId
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        // If item is new, add it to the cart
        updatedCart = [...state.cart, newItem];
      }

      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotal(updatedCart), // Recalculate total price
      };
    }

    case "REMOVE_FROM_CART": {
      const productIdToRemove = action.payload; // Expecting just the productId
      const filteredCart = state.cart.filter(
        (item) => item.productId !== productIdToRemove
      );

      return {
        ...state,
        cart: filteredCart,
        totalPrice: calculateTotal(filteredCart), // Recalculate total price
      };
    }

    case "UPDATE_CART_QUANTITY": {
      const { productId, quantity } = action.payload; // Expecting { productId: id, quantity: 5 }

      const updatedCart = state.cart.map((item) =>
        item.productId === productId ? { ...item, quantity: quantity } : item
      );

      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotal(updatedCart),
      };
    }

    // Add cases for setting initial state from localStorage (if applicable)
    case "SET_CART_ITEMS":
      return {
        ...state,
        cart: action.payload,
        totalPrice: calculateTotal(action.payload),
      };

    default:
      return state;
  }
};
