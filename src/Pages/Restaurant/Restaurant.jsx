import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../../Utils/constants';
import axios from 'axios';
import AccordionComponent from '../../Components/Accordion/Accordion';
import Rough from '../../Components/Rough';

const Restaurant = () => {
    let { id } = useParams();
    const [data, setData] = useState([])
    // console.log('data: ', data);
    const [resInfo, setResInfo] = useState([]);
    console.log('id: ', id);
    const getData = () => {
        axios({
            url: MENU_URL + id,
            method: "GET",
        })
            .then((res) => {
                if (res && res != null) {
                    const restaurantData = res?.data?.data?.cards[0]?.card?.card?.info;
                    setResInfo(restaurantData);
                    // const restaurantData = res?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                    // const updatedData = res?.data?.data?.cards[2]?.card?.card?.info
                    console.log('restaurantData: ', restaurantData);
                    const categoriesData = res?.data?.data?.cards?.[res?.data?.data.cards.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                    const categories = categoriesData?.filter((c) =>
                        c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                    )
                    // console.log('categories: ', categories);
                    setData(categories);
                }
            })
            .catch((err) => {
                console.log("error", err)
            });
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
        {/* <Rough /> */}
            <div className='container'>
                {
                    data?.map((item, index) => (
                        <AccordionComponent
                            key={index}
                            data={item?.card?.card?.itemCards}
                            title={item?.card?.card?.title}
                            val={index}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Restaurant