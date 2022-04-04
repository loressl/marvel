import styled from "styled-components";

interface ButtonContainerProps {
    disabled: boolean
}

export const Container = styled.button<ButtonContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 1%;
    opacity: ${(disabled) => disabled ? 0: 1};
`