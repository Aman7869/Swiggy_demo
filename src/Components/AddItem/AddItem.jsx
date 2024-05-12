import React from "react";
import Slider2 from '../../assets/images/slider2.jpg';
import { ListItemStyle } from "./style";
import { useDispatch } from "react-redux";
import {removeItem} from "../../store/cartSlice";


const AddItem = (data) => {
    const dispatch = useDispatch();
    const { name, price, id } = data?.data
    console.log('price: ', price);
    const removeItemList = (id)=> {
        dispatch(removeItem(id));
    }
    return (
        <>
            <ListItemStyle>
                <div className="list-item container pt-3 d-flex justify-content-between">
                    <div className="list-info">
                        <h5>{name}</h5>
                        <p>Rs {price / 100}</p>
                        <button className="remove-btn" onClick={()=> removeItemList(id)}>Remove</button>
                    </div>
                    <div className="list-img">
                        <img src={Slider2} alt="" width={"200px"} />
                    </div>
                </div>
            </ListItemStyle>
        </>
    )
}

export default AddItem;