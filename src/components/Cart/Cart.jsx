import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { CartItem } from "../cartItem/CartItem";
import "./Cart.css";

export function Cart() {
    const { toggleCart, cart } = useContext(ShopContext);

    return (
        <>
            <div className="cart-content">
                <i
                    className="material-icons close-cart-icon"
                    onClick={toggleCart}
                >
                    close
                </i>
                <ul className="collection">
                    {cart.length === 0 ? (
                        <h3 className="align-empty-cart-text">
                            No selected items
                        </h3>
                    ) : (
                        cart.map((item) => {
                            return <CartItem key={item.id} {...item} />;
                        })
                    )}
                </ul>
                <ul className="cart-footer">
                    <li className="collection-item">
                        <button
                            className="btn margin-right-1"
                            onClick={toggleCart}
                        >
                            Close
                        </button>
                        <button className="btn" disabled={cart.length === 0}>
                            Buy
                        </button>
                        <span className="right">
                            Total price:
                            {cart.reduce((total, item) => {
                                return (total += item.price * item.quantity);
                            }, 0)}
                            $
                        </span>
                    </li>
                </ul>
            </div>
            <div className="cart-backdrop"></div>
        </>
    );
}
