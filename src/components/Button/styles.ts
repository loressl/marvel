import styled from "styled-components";

interface ContainerProps {
    width: number
    maxWidth: number
}

export const Container = styled.button<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--red);
    font-size: 18px;
    color: var(--white);
    border: none;
    border-radius: 0.5rem;
    height: 2rem;
    padding: 0.5rem;
    margin: 0.5rem 0 0.5rem 0;
    width: ${({width}) => width+"rem"};
    max-width: ${({maxWidth}) => maxWidth+"rem"};

    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.7)
    }
`