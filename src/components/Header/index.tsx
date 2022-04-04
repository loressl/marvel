import { FormEvent } from "react"
import { Container } from "./styles"
import { SearchField } from "../SearchField"
import { useCharacters } from "../../hooks/useCharacters"

import marvelLogo from '../../assets/images/marvel.svg'

export const Header = () => {
    const { handleSearchCharacter, search, setSearch } = useCharacters()

    const handleChangeSearch = (event: FormEvent<HTMLInputElement>) => setSearch(event.currentTarget.value)

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