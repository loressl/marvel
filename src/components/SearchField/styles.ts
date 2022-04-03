import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;

    .search-input-field {
        display: flex;
        box-shadow: 0 0.5rem 1.4rem 0 rgb(255,255,255, 0.25);
        width: 100%;
        border-radius: 0.5rem;

        input {
            appearance: none;
            border: 0;
            background-color: var(--white);
            height: 100%;
            color: var(--black);
            border-radius: 0;
            margin: 0;
            width: 100%;
            padding: 0.9rem 1.25rem;
            font-size: 16px;
            border-bottom-left-radius: 0.5rem;
            border-top-left-radius: 0.5rem;

            &:focus {
                outline: none;
            }
        }

        button {
            background-color: var(--red);
            border: none;
            width: 15%;
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.7)
            }

            &:active {
                box-shadow: 0 1px 15px 0px rgba(255,255,255,.2);
            }

            .icon {
                color: var(--white);
            }

            @media (max-width: 800px) {
                width: 15%;
            }

            @media (max-width: 500px) {
                width: 22%;
            }
        }
    }
`