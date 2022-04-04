import { SyntheticEvent } from "react"
import { Container } from "./styles"

interface CardProps {
    id: number
    name: string
    image: string
    onClickCharacter: (event: SyntheticEvent,id: number) => void
}

export const Card = ({id, name, image, onClickCharacter }: CardProps) => {
    return(
        <Container onClick={(event:SyntheticEvent) => onClickCharacter(event, id)} image={image}>
            <div className="name">
                <span>{name}</span>
            </div>
        </Container>
    )
}