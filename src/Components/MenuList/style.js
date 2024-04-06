import styled from "styled-components";

export const MenuListStyle = styled.div`
        color: #616161;
        & .menu-list {
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.75rem;
            color: #616161;
            margin-bottom: 1px;
        }

        & .description,.price {
            margin-bottom: 1px;
        }
        & .description{
            font-size: 0.875rem;
        }

        & .menu-img {
            width: 131px;
            border-radius: 9px;
            // float: right;
        }

        & .menu-item {
            float: right;
        }
`;