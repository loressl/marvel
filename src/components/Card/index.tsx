import { SyntheticEvent } from "react"
import { Container } from "./styles"

interface CardProps {
    id: number
    name: string
    image: string
    onClickCharacter?: (event: SyntheticEvent,id: number) => void
    cursor: string
    maxWidth: number
    height: number
}

export const Card = ({
id, 
name, 
image, 
onClickCharacter, 
cursor, 
maxWidth,
height
}: CardProps) => {
    return(
        <Container 
            cursor={cursor}
            maxWidth={maxWidth}
            height={height}
            onClick={ onClickCharacter && ((event:SyntheticEvent) => onClickCharacter(event, id))} 
            image={image}
        >
            <div className="name">
                <span>{name}</span>
            </div>
        </Container>
    )
}