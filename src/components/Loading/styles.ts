import styled from "styled-components";

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 60vh;

    .loading_text {
        color: var(--red);
        font-weight: 600;
        font-size: 18px;
    }
`