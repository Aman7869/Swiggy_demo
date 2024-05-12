import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { ItemStoreStyle } from "./style";
import ListItemStyle from "../../Components/AddItem/AddItem";
import {clearItem} from "../../store/cartSlice";


const ItemStore = () => {
    const dispatch = useDispatch();
    const itemData = useSelector((store) => store.cart.items);
    const clearItemList = () => {
        dispatch(clearItem());
    }
    return (
        <>
            <ItemStoreStyle>
                <div className="item-cart">
                    <h2>Total Cart Item : {itemData.length}</h2>
                    <button className="btn-clear" onClick={clearItemList} disabled ={itemData.length > 0 ? false : true}>Clear Cart</button>
                    <button className="btn-checkout">Checkout</button>
                </div>
                <div className="pt-5">
                    {
                        itemData?.map((item) => (
                            <ListItemStyle data={item} key={item.id} />
                        ))
                    }
                </div>

            </ItemStoreStyle>
        </>
    )
}

export default ItemStore;