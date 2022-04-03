import { Container } from "./styles"
import { ImSearch }  from 'react-icons/im'

interface SearchFieldProps {
    search: string
    setSearch: () => void
    onSubmit: () => void
}

export const SearchField = () => {
    return(
        <Container>
            <form className="search-input-field">
                <input 
                    type='text'
                />
                <button type="submit">
                    <ImSearch className="icon" size={20}/>
                </button>
            </form>
        </Container>
    )
}