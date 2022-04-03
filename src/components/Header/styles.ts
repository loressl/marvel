import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    
    flex-direction: column;
    margin:0 auto;
    padding:0 2rem;
    width: 100%;
    height: 15rem;
    border-bottom: 2px solid var(--red-dark);
    position: sticky;
    top: 0;
    z-index: 1;

    .logo {
        object-fit: cover;
        height: 5rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
    }

    .search-field {
        max-width: 37.5rem;
        height: 3.5rem;
        width: 100%;
        padding: 0;
        margin-top: 1rem;
    }
`