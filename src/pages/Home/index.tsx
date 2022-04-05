import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { useCharacters } from '../../hooks/useCharacters'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading'

export function Home () {
    const { characters, handleClickCharacter, handleLoadMore, totalCharacter } = useCharacters()

    return (
        <Container>
            <Header/>
            {!!characters.length ?
                <>
                    <div className='list-card'>
                        {characters.map((value) =>
                            <Card 
                                cursor="pointer"
                                maxWidth={20}
                                height={20}
                                key={value.id}
                                id={value.id}
                                onClickCharacter={handleClickCharacter}
                                name={value.name}
                                image={value.thumbnail.path + '.' + value.thumbnail.extension}
                            />
                        )}
                    </div>
                    <div id="sentinel" />
                    { totalCharacter > characters.length && 
                        <div className='container-button'>
                            <Button maxWidth={10} width={100} name='Load more' onClick={handleLoadMore}/>
                        </div>
                    }
                </>
            :<Loading/>}
        </Container>
    )
}