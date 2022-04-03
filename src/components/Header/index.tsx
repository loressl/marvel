import { Container } from "./styles"
import marvelLogo from '../../assets/images/marvel.svg'
import { SearchField } from "../SearchField"

export const Header = () => {
    return(
        <Container>
            <img className="logo" src={marvelLogo} alt="Marvel"/>
            <div className="search-field">
                <SearchField />
            </div>
        </Container>
    )
}