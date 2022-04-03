import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-height: 100%;
    flex-direction: column;

    .list-card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        gap: 1rem;
        margin: 1rem;
        width: auto;
    }
`