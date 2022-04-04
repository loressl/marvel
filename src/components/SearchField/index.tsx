import { Container } from "./styles"
import { ImSearch }  from 'react-icons/im'
import { FormEvent, SyntheticEvent } from "react"

interface SearchFieldProps {
    search: string
    onHandleChange: (event: FormEvent<HTMLInputElement>) => void
    onSubmit: (event: SyntheticEvent) => void
}

export const SearchField = ({search, onHandleChange, onSubmit}: SearchFieldProps) => {
    return(
        <Container>
            <form className="search-input-field" onSubmit={(event: SyntheticEvent) => onSubmit(event)}>
                <input 
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