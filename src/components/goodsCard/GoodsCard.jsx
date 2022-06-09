import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./GoodsCard.css";

export function GoodsCard(props) {
    const { addToCart } = useContext(ShopContext);
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price,
        displayAssets,
    } = props;

    const imageSource = displayAssets.length
        ? displayAssets[0].full_background
        : `https://via.placeholder.com/300x400?text=${name}`;
    return (
        <div className="card card-flex">
            <div className="card-image">
                <img src={imageSource} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn btn-medium"
                    onClick={() =>
                        addToCart({
                            id,
                            name,
                            imageSource,
                            price: price.finalPrice,
                        })
                    }
                >
                    Buy
                </button>
                <span className="card-title right">{price.finalPrice} $</span>
            </div>
        </div>
    );
}
