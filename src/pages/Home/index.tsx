import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Container } from './styles'

const listFake = [
    { name: 'um' },
    { name: 'um' },
    { name: 'um' },
    { name: 'um' },
    { name: 'um' },
    { name: 'um' },
]

export function Home () {
    return (
        <Container>
            <Header/>
            <div className='list-card'>
                {listFake.map((value, index) =>
                    <Card 
                        key={index}
                        thumbail="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
                    />
                )}
            </div>
        </Container>
    )
}