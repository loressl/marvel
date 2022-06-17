import { Container } from "./styles"
import { ImSearch }  from 'react-icons/im'
import { ChangeEvent, SyntheticEvent } from "react"

export interface SearchFieldProps {
    search: string
    onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void
    onSubmit: (event: SyntheticEvent) => void
}

export const SearchField = ({search, onHandleChange, onSubmit}: SearchFieldProps) => {
    return(
        <Container>
            <form className="search-input-field" onSubmit={(event: SyntheticEvent) => onSubmit(event)}>
                <input
                    data-testid='searchInput' 
                    type='text'
                    placeholder="Do your research..."
                    value={search}
                    onChange={onHandleChange}
                />
                <button type="submit">
                    <ImSearch className="icon" size={20}/>
                </button>
            </form>
        </Container>
    )
}