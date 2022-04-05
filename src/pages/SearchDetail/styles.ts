import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 100%;
    min-height: 100vh;
    background-color:var(--black);
    overflow: auto;

    .image_hero {
        width: 100%;
        max-width: 16rem;
        height: 16rem;
        border-radius: 0.2rem;
        border: 2px solid var(--white);
    }

    .details {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0.5rem;
        width: 100%;
        gap: 1rem;
    }

    .details_elements {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 42rem;

        .name_hero {
            font-size: 26px;
            font-weight: 500;
            color: var(--white);
            text-decoration: underline;
            margin: 0.5rem;
        }

        .description {
            text-align: justify;
            font-size: 16px;
            color: var(--white);
            margin: 0.5rem;
        }

        .comics_title {
            font-size: 20px;
            color: var(--white);
            margin: 0.5rem 0.2rem;
        }

        .comics {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            max-width: 42rem;
            width: 100%;
            height: 25rem;
            overflow: auto;
            gap: 10px;
            padding: 0.5rem 0.2rem;
        }

        .without_comics {
            color: var(--white);
            font-size: 16px;
        }
    }

    .no_details {
        display: flex;
        flex-direction: column;
        align-items: center;

        .no_details_text {
            color: var(--white);
            font-size: 30px;
            margin:1rem 0.5rem;
        }

        .no_details_image {
            width: 100%;
            max-width: 20rem;
            height: 20rem;
            border-radius: 5rem;
        }
    }
`