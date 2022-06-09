import { TYPES } from "./constants";

export function shopReducer(state, { type, payload }) {
    switch (type) {
        case TYPES.ADD_TO_CART:
            const itemIndex = state.cart.findIndex(
                (item) => item.id === payload.id
            );
            let newCart;
            if (itemIndex < 0) {
                newCart = [...state.cart, { ...payload, quantity: 1 }];
            } else {
                newCart = state.cart.map((item, index) => {
                    if (index !== itemIndex) {
                        return item;
                    }
                    return { ...item, quantity: item.quantity + 1 };
                });
            }
            return {
                ...state,
                cart: newCart,
            };
        case TYPES.TOGGLE_CART:
            if (!state.isCartOpen) {
                document.querySelector("body").style.overflow = "hidden";
            } else {
                document.querySelector("body").style.overflow = "auto";
            }

            return {
                ...state,
                isCartOpen: !state.isCartOpen,
            };
        case TYPES.FETCH_DATA:
            return {
                ...state,
                isLoading: false,
                goods: payload,
            };
        case TYPES.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload.id),
            };
        case TYPES.SET_LOCAL_CART:
            return {
                ...state,
                cart: payload,
            };
        case TYPES.UPDATE_GOODS_COUNT:
            return {
                ...state,
                cart: state.cart
                    .map((item) => {
                        if (item.id === payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity + payload.count,
                            };
                        }
                        return item;
                    })
                    .filter((item) => item.quantity > 0),
            };
        default:
            return state;
    }
}
