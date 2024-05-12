import styled from "styled-components";

export const FoodCardStyle = styled.div`
    .card {
        width: 16rem;
        min-height: 334px;
        font-size: 15px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: -webkit-grab; cursor: pointer;
        
    }

    & .food-link {
        text-decoration: none;
    }

    & .star_rating{
        width: 20px;
        padding-left: 2px;
        padding-bottom: 3px;
    }

    & .cuisines{
        width: 14em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        
    }
`;