import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

//import { Card } from '../../components/Card'

//import Slider from "react-carousel-responsive";
import "react-carousel-responsive/dist/styles.css";

// import Carousel from 'styled-components-carousel';

// import Carousel from 'react-material-ui-carousel'

// import { ScrollMenu } from "react-horizontal-scrolling-menu";
// import { LeftArrow, RightArrow } from '../../components/Arrow'
import { useCharacters } from '../../hooks/useCharacters';

const teste = [
    { image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg' },
    { image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg' },
    { image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg' },
    { image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg' },
]

export function SearchDetail () {
    const navigate = useNavigate()
    const { detailCharacter } = useCharacters()

    return (
        <Container>
            <div className='card_detail'>
                <button onClick={() => navigate('/')}>
                    Back to search
                </button>
                <div className='details'>
                    <img src={detailCharacter?.thumbnail.path + '.' + detailCharacter?.thumbnail.extension} alt=''/>
                    <div className='details_elements'>
                        <span className='name' >{detailCharacter?.name}</span>
                        <span className='description'>{detailCharacter?.description}</span>
                    </div>
                </div>
                <div className='carousel-div'>
                    {/* <ScrollMenu
                        LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                    >
                        {teste.map((value, index) =>
                            <Card
                                key={index}
                                id={index}
                                name="teste"
                                image={value.image}
                                onClickCharacter={() => {}}
                            />
                        )}
                    </ScrollMenu> */}
                    {/* <Carousel>
                        {teste.map((value, index) =>
                            <Card
                                key={index}
                                id={index}
                                name="teste"
                                image={value.image}
                                onClickCharacter={() => {}}
                            />
                        )}
                    </Carousel> */}
                </div>
            </div>
        </Container>
    )
}