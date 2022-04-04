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

    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        height: 60vh;

        span {
            color: var(--red);
            font-weight: 600;
            font-size: 18px;
        }
    }
`