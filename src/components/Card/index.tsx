import { Container } from "./styles"

interface CardProps {
    thumbail: string
}

export const Card = ({ thumbail }: CardProps) => {
    return(
        <Container image={thumbail}>
            <div className="name">
                <span>Iron man</span>
            </div>
        </Container>
    )
}