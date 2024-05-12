import React, { useContext, useEffect, useRef, useState } from 'react'
import Slider from '../../Components/Slider/Slider'
import { CardSectionStyle, FoodSection, TopRestaurant } from './style'
import Cakes from '../../assets/images/Cakes.png'
import Chinese from '../../assets/images/Chinese.png'
import NorthIndian from '../../assets/images/North_Indian_4.png'
import Pasta from '../../assets/images/Pasta.png';
import Pizza from '../../assets/images/Pizza.png';
import FoodCard from '../../Components/FoodCard/FoodCard'
import axios from "axios";
import { CDN_URL, SWIGGY_URL } from "../../Utils/constants";
import { SearchContext } from '../../Utils/searchContext';

const Home = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const { search, searchClicked, setSearchClicked } = useContext(SearchContext);
    const myRef = useRef(null)
    const searchButton = () => {
        const filterData = data.filter((e) =>
            e.info.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilterData(filterData);
    };

    const getData = () => {
        axios({
            // url: SWIGGY_URL,
            url: CDN_URL,
            method: "GET",
        })
            .then((res) => {
                console.log('res: ', res);
                if (res && res != null) {
                    const updatedData = res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                    console.log('updatedData: ', updatedData);
                    setData(updatedData);
                    setFilterData(updatedData);
                }
            })
            .catch((err) => {
                console.log("error", err)
            });
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (searchClicked) {
            console.log("inside searchClicked function");
            setSearchClicked(false);
            searchButton();
            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [searchClicked]);

    const foodCategory = (food) => {
        if (food === "all") {
            setFilterData(data);
        } else {
            const result = data.filter((item) => item?.info?.cuisines.includes(food))
            setFilterData(result);
        }
    }
    const restaurantsCategory = (filterRestaurants) => {
        const resultRestaurants = data.filter((item) => {
            switch (filterRestaurants) {
                case 'veg': return item?.info?.veg === true;
                case 'fast_delivery': return item?.info?.sla?.deliveryTime < 30;
                case 'top_rated': return item?.info?.avgRating > 4.2;
            }
        })
        setFilterData(resultRestaurants);
    }
    return (
        <>
            <Slider />
            <FoodSection>
                <div className='food_section container-fluid'>
                    <h4>What do you want to eat?</h4>
                    <div className='d-flex'>

                        <div className="food-card" onClick={() => foodCategory("North Indian")}>
                            <img className="card-img-top" src={NorthIndian} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="">North Indian</h5>
                            </div>
                        </div>

                        <div className="food-card" onClick={() => foodCategory("Desserts")}>
                            <img className="card-img-top" src={Cakes} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="">Cakes</h5>
                            </div>
                        </div>

                        <div className="food-card" onClick={() => foodCategory("Pizzas")}>
                            <img className="card-img-top" src={Pizza} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="">Pizza</h5>
                            </div>
                        </div>

                        <div className="food-card" onClick={() => foodCategory("Pastas")}>
                            <img className="card-img-top" src={Pasta} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="">Pasta</h5>
                            </div>
                        </div>

                        <div className="food-card" onClick={() => foodCategory("Chinese")}>
                            <img className="card-img-top" src={Chinese} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="">Chinese</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </FoodSection>
            <TopRestaurant>
                <div className='top_restaurant container-fluid'>
                    <h4>Top restaurants around you</h4>
                    <div className='d-flex pt-4'>
                        <button className='btn btn-dark me-4' onClick={() => foodCategory("all")}>ALL</button>
                        <button className='btn btn-dark me-4' onClick={() => restaurantsCategory("top_rated")}>TOP RATED</button>
                        <button className='btn btn-dark me-4' onClick={() => restaurantsCategory("fast_delivery")}>FAST DELIVERY</button>
                        <button className='btn btn-dark me-4' onClick={() => restaurantsCategory("veg")}>PURE VEG</button>
                    </div>
                </div>
            </TopRestaurant >
            <CardSectionStyle>
                <div className='d-flex flex-wrap justify-content-center all_cards container-fluid' ref={myRef}>
                    {
                        filterData.length > 0 ? (
                            filterData?.map((item, index) => (
                                <FoodCard key={item?.info?.id} resData={item} />
                            ))
                        ) : (
                            <h4 className='text-center'>No Restaurants Found</h4>
                        )
                    }
                </div>
            </CardSectionStyle>

        </>
    )
}

export default Home