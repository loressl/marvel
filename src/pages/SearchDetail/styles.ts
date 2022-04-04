import styled from "styled-components";
import wallpaper from '../../assets/images/heros_wallpaper.jpg'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: relative;
    background-color:var(--black);

    .card_detail {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: flex-start;

        max-width: 42rem;
        width: 100%;

        padding: 1.5rem 2rem 1.5rem 2rem;
        background-color: var(--white);
        border-radius: 1rem;

        @media (max-width: 720px) {
            margin: 0.5rem;
        }

        img {
            width: 100%;
            max-width: 15rem;
            height: 16rem;
            border-radius: 0.2rem;
        }

        button {
            display: flex;
            align-items: center;
            background-color: var(--red);
            font-size: 18px;
            color: var(--white);
            border: none;
            border-radius: 0.5rem;
            height: 2rem;
            padding: 0.5rem;
            margin: 0.5rem 0 0.5rem 0;

            transition: filter 0.2s;
            &:hover {
                filter: brightness(0.7)
            }
        }

        .details {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 0.5rem 0 0.5rem 0;
            width: 100%;
            gap: 1rem;
        }

        .details_elements {
            display: flex;
            flex-direction: column;

            .name {
                font-size: 22px;
                font-weight: 500;
                margin-bottom: 0.5rem;
            }

            .description {
                text-align: justify;
            }
        }

        .carousel-div {
            display: flex;
            flex-direction: row;
            width: 100%;

            .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
                display: none;
            }

            .react-horizontal-scrolling-menu--scroll-container {
                -ms-overflow-style: none; 
                scrollbar-width: none; 
            }

            .react-horizontal-scrolling-menu--wrapper {
                flex-wrap: wrap;
                justify-content: center;
            }

            .react-horizontal-scrolling-menu--scroll-container {
                order: 1;
                flex-basis: 100%;
                flex-shrink: 0;
            }

            .react-horizontal-scrolling-menu--wrapper {
            flex-wrap: wrap;
            justify-content: center;
            }

            .react-horizontal-scrolling-menu--scroll-container {
            flex-basis: 100%;
            flex-shrink: 0;
            }

            /* Change position of container so arrows will be at top/bottom */
            .react-horizontal-scrolling-menu--scroll-container {
            order: -1; /* order: 1; for top position */
            }
        }
        
    }

    /* .wallpaper {
        height: 100%;
        width: 100%;
    } */

    /* background:url(${wallpaper}) no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    -webkit-background-size:cover;
    -moz-background-size:cover; */
`