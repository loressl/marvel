import { fireEvent, render, waitFor } from '../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import { Header } from '.'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => jest.fn()
}))

describe('Header', () =>{
    it('renders component search field', async () => {
        const { getByTestId }= render(<Header/>)
        expect(getByTestId('searchInput')).toBeTruthy()
    })

    // it('test type', async () => {
    //     const {debug, getByTestId }= render(<Header/>)
    //     const inputElement = getByTestId('searchInput')

    //     await userEvent.type(inputElement, 'teste')
    //     fireEvent.change(inputElement, {target: { value: 'teste'}})

    //     await waitFor (() => {
    //         console.log(inputElement)
    //     })
    // })
})