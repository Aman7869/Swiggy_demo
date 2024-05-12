import styled from "styled-components";

export const ListItemStyle = styled.div`
    & .list-item {
        width : 60%;
    }

    @media screen and (max-width: 767px) {
        & .list-item img {
            width : 70px;
        }
     }
`;