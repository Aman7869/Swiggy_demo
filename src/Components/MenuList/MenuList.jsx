import React from 'react'
import { MenuListStyle } from './style'
import { MENU_IMAGE } from '../../Utils/constants'

const MenuList = ({ data }) => {
    const { name, price, description, imageId } = data?.card?.info
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
                                <img src={MENU_IMAGE + imageId} className='menu-img' alt="menu image" />
                                <button className='btn btn-dark me-4 d-block w-100'>Add</button>
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