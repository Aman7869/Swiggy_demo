import React from 'react'
import { FoodCardStyle } from './style'
import StarRating from '../../assets/images/star.png'
import Slider2 from '../../assets/images/slider2.jpg'
import { MENU_IMAGE } from "../../Utils/constants";
import { Link } from 'react-router-dom';
const FoodCard = ({ resData }) => {
    const { name, avgRating, cuisines, locality, sla, cloudinaryImageId,id } = resData?.info;
    console.log(MENU_IMAGE + cloudinaryImageId, "img");
    return (
        <>
            <FoodCardStyle>
                <Link to={`/restaurant/${id}`} className='food-link'>
                    <div className="card me-5 mt-5">
                        <img className="card-img-top" src={Slider2} alt="Card image cap" />
                        {/* <img className="card-img-top" src={MENU_IMAGE + cloudinaryImageId} alt="Card image cap" /> */}
                        <div className="card-body">
                            <h6 className="card-title">{name}</h6>
                            <p className='d-inline'>{avgRating}</p><span><img src={StarRating} className='star_rating' alt="Rating" /></span>
                            <p className='d-inline float-end'>{sla?.slaString}</p>
                            <p className='m-0 pt-2 cuisines'>{cuisines.join(",")}</p>
                            <p className='m-0'>{locality}</p>
                        </div>
                    </div>
                </Link>
            </FoodCardStyle>
        </>

    )
}

export default FoodCard