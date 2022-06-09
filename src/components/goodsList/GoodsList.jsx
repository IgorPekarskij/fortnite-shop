import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { GoodsCard } from "../goodsCard/GoodsCard";

export function GoodsList() {
    const { goods = [] } = useContext(ShopContext);
    return (
        <>
            {goods.map((item) => {
                return <GoodsCard key={item.mainId} {...item} />;
            })}
        </>
    );
}
