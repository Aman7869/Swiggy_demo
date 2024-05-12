import styled from "styled-components";

export const ItemStoreStyle = styled.div`
        & .item-cart {
            background-color: grey;
            height: 10rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & .item-cart .btn-clear {
            background-color: black;
            color: #fff;
            padding: 8px;
            border-radius: 8px;
            margin-left: 8px;

        }

        & .item-cart .btn-checkout {
            background-color: #4CAF50;
            color: #fff;
            padding: 8px;
            border: 1px solid #4CAF50;
            border-radius: 8px;
            margin-left: 8px;
        }

        & .remove-btn {
            background-color: #fff;
            color: #e53935;
            border: 2px solid #e53935;
            padding: 8px;
            border-radius: 8px;
        }

        & .remove-btn:hover{
            background-color: #e53935;
            color: #fff;
        }
`;