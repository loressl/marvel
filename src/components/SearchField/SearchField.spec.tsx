import { render, screen } from '../../test-utils/testing-library-utils'
import { SearchField, SearchFieldProps } from '.'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => jest.fn()
}))

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