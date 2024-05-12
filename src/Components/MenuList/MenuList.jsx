import React from 'react'
import { MenuListStyle } from './style'
import { MENU_IMAGE } from '../../Utils/constants'
import Slider2 from '../../assets/images/slider2.jpg'
import { useDispatch } from 'react-redux'
import { addItem } from "../../store/cartSlice";


const MenuList = ({ data }) => {
    const dispatch = useDispatch();
    const { name, price, description, imageId, id } = data?.card?.info
    const handleClick = () => {
        dispatch(addItem(data?.card?.info));
        console.log("Click", id);
    }
    return (
        <>
            <MenuListStyle>
                <div className='restaurant-list pt-2'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <p className='menu-list'>{name}</p>
                            <p className='price'>Rs {price / 100}</p>
                            <p className='description pt-2'>{description}</p>
                        </div>
                        <div className='col-md-4 '>
                            <div className='menu-item'>
                                <img src={Slider2} className='menu-img' alt="menu image" />
                                {/* <img src={MENU_IMAGE + imageId} className='menu-img' alt="menu image" /> */}
                                <button className='btn btn-dark me-4 mt-1 d-block w-100' onClick={() => handleClick()}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
            </MenuListStyle>
        </>
    )
}

export default MenuList