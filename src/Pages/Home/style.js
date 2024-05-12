import styled from "styled-components";

export const FoodSection = styled.div`
padding: 2% 2%;
 & .food-card{
    width: 10rem;
    cursor: pointer;
 }

 & .food-card:hover{
   box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
 }

 & img{
    padding-bottom: 1rem;
    object-position: top;
    object-fit: cover;
    border-radius: 9999px;
    width: 10rem;
    height: 10rem;
 }
 & .card-body {
    text-align: center;
 }

 @media screen and (max-width: 767px) {
    & .category{
      flex-wrap: wrap;
    }
 }
`;

export const TopRestaurant = styled.div`
padding: 2% 2%;
`;

export const CardSectionStyle = styled.div`
padding: 2% 2%;
& .all_cards{
   gap: 55px;
}
`;