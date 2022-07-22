import { Container } from "./styles"
import { SearchField } from "../SearchField"
import { useCharacters } from "../../hooks/useCharacters"

import marvelLogo from '../../assets/images/marvel.svg'
//https://www.ksharifbd.com/blog/testing-react-custom-hook-how-to-mock-usecontext-value-with-jest/

//https://kentcdodds.com/blog/how-to-test-custom-react-hooks
export const Header = () => {
    const { handleSearchCharacter, search, handleChangeSearch } = useCharacters()

    return(
        <Container>
            <img className="logo" src={marvelLogo} alt="Marvel"/>
            <div className="search-field">
                <SearchField 
                    search={search}
                    onHandleChange={handleChangeSearch}
                    onSubmit={handleSearchCharacter}
                />
            </div>
        </Container>
    )
}