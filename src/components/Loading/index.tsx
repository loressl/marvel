import { IntersectingCirclesSpinner } from "react-epic-spinners"
import { Container } from "./styles"

export const Loading = () =>{
    return(
        <Container>
            <IntersectingCirclesSpinner color='#ff0000' size={100} />
            <span className="loading_text">Loading...</span>
        </Container>
    )
}