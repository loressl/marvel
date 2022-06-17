import { render, screen } from '@testing-library/react'
import { SearchField, SearchFieldProps } from '.'

function renderSearchField(props: Partial<SearchFieldProps> = {}) {
    const defaultProps: SearchFieldProps = {
        onHandleChange() {
            return
        },
        onSubmit() {
            return
        },
        search: ''
    } 
    return render(<SearchField {...defaultProps} {...props}/>)
}

describe('SearchField', () => {
    it('renders correctly', () => {
        renderSearchField()
        const input = screen.getByPlaceholderText('Do your research...')

        expect(input).toBeTruthy()
    })
})