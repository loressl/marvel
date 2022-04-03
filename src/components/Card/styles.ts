import styled from "styled-components";

interface ContainerPros {
    image: string
}

export const Container = styled.div<ContainerPros>`
    display: flex;
    flex-direction: column;

    background-image: url(${({image}) => image});
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;

    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    max-width: 20rem;
    width: 100%;
    height: 20rem;
    cursor: pointer;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .name {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 3rem;
        padding: 0.5rem;
        position: relative;
        bottom: 0;
        right: 0;
        top: 17rem;
        background-color: rgba(0, 0, 0, 0.9);
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;

        span {
            font-size: 20px;
            color: var(--white);
        }
    }
`