import { useEffect, useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { BASE_URL, API_KEY } from "../../config";
import "./Shop.css";
import { Preloader } from "../preloader/Preloader";
import { GoodsList } from "../goodsList/GoodsList";
import { Cart } from "../Cart/Cart";

export function Shop() {
    const { isLoading, isCartOpen, cart, fetchData, toggleCart } =
        useContext(ShopContext);

    useEffect(() => {
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
