import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./CartItem.css";

export function CartItem(props) {
    const { updateGoodsQuantity, removeFromCart } = useContext(ShopContext);
    const { id, name, quantity, imageSource } = props;
    return (
        <li className="collection-item avatar goods-collection-item">
            <img src={imageSource} alt="{name}" className="circle" />

            <i
                className="material-icons grid-item"
                onClick={() => updateGoodsQuantity(id, -1)}
            >
                exposure_neg_1
            </i>
            <span className="title grid-item align-text-center">{name}</span>
            <i
                className="material-icons grid-item "
                onClick={() => updateGoodsQuantity(id, 1)}
            >
                exposure_plus_1
            </i>
            <span className="title grid-item align-text-center">
                Quantity: {quantity}
            </span>
            <i
                className="material-icons grid-item"
                onClick={() => removeFromCart(id)}
            >
                delete
            </i>
        </li>
    );
}
