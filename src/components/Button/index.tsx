import { Container } from "./styles"

interface ButtonProps {
    name: string
    onClick: () => void
    width: number
    maxWidth: number
}

export const Button = ({name, onClick, width, maxWidth}: ButtonProps) => { 
    return(
        <Container maxWidth={maxWidth} width={width} onClick={onClick}>
            {name}
        </Container>
    )
}