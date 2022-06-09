import { useEffect, useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { BASE_URL, API_KEY } from "../../config";
import "./Shop.css";
import { Preloader } from "../preloader/Preloader";
import { GoodsList } from "../goodsList/GoodsList";
import { Cart } from "../cart/Cart";

export function Shop() {
    const { isLoading, isCartOpen, cart, fetchData, toggleCart, setLocalCart } =
        useContext(ShopContext);

    useEffect(() => {
        const localCart = localStorage.getItem("fortnight-cart");
        if (localCart) {
            setLocalCart(JSON.parse(localCart));
        }
        fetch(BASE_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                fetchData(data.shop);
            });
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        localStorage.setItem("fortnight-cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            {isCartOpen ? <Cart /> : null}
            <div className="card-icon" onClick={toggleCart}>
                <i className="material-icons">shopping_cart</i>
                <span>{cart.length}</span>
            </div>

            <div className="container content">
                {isLoading ? <Preloader /> : <GoodsList />}
            </div>
        </>
    );
}
