import { Container } from './styles'
import avengers from '../../assets/images/avengers.png'

export function NotFound () {
    return (
        <Container>
            <img className='img_404' src={avengers} alt='Avengesr'/>
            <h1 className='error_404'>404</h1>
            <span className='not_found'>Not Found</span>
        </Container>
    )
}