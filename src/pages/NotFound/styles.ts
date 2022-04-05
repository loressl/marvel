import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color:var(--black);

    .img_404 {
        width: 100%;
        width: 20rem;

    }

    .not_found {
        color: var(--white);
        font-size: 20px;
    }

    .error_404 {
        color: var(--white);
        font-size: 50px;
    }
`