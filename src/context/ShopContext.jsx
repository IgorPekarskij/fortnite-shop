import { createContext, useReducer } from "react";
import { shopReducer } from "../reducers/shopReducer";
import { TYPES } from "../reducers/constants";

export const ShopContext = createContext();

const defaultState = {
    goods: [],
    cart: [],
    imageSource: "",
    isLoading: true,
    isCartOpen: false,
};

export const ShopContextProvider = (props) => {
    const [value, dispatch] = useReducer(shopReducer, defaultState);

    value.fetchData = (data) => {
        dispatch({ type: TYPES.FETCH_DATA, payload: data });
    };

    value.toggleCart = () => {
        dispatch({ type: TYPES.TOGGLE_CART });
    };

    value.addToCart = (item) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: item });
    };

    value.updateGoodsQuantity = (id, count) => {
        dispatch({ type: TYPES.UPDATE_GOODS_COUNT, payload: { id, count } });
    };

    value.removeFromCart = (id, count) => {
        dispatch({ type: TYPES.REMOVE_FROM_CART, payload: { id } });
    };

    value.setLocalCart = (cart) => {
        dispatch({ type: TYPES.SET_LOCAL_CART, payload: cart });
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};
