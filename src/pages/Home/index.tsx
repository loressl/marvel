import { useEffect, useRef } from 'react'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { useCharacters } from '../../hooks/useCharacters'
import { Container } from './styles'
import { IntersectingCirclesSpinner } from 'react-epic-spinners'

export function Home () {
    const { characters, handleClickCharacter } = useCharacters()
    const bottomRef = useRef(null)

    // useEffect(() => {
    //     const { current } = bottomRef
    //     const intersectionObserver = new IntersectionObserver(([entries]) => console.log(entries));

    //     intersectionObserver.observe(current)

    //     return () => intersectionObserver.disconnect(current)

    // }, [bottomRef.current])

    return (
        <Container>
            <Header/>
            {!!characters.length ?
                <>
                    <div className='list-card'>
                        {characters.map((value) =>
                            <Card 
                                key={value.id}
                                id={value.id}
                                onClickCharacter={handleClickCharacter}
                                name={value.name}
                                image={value.thumbnail.path + '.' + value.thumbnail.extension}
                            />
                        )}
                    </div>
                    <div ref={bottomRef} />
                </>
            :
                <div className='loading'>
                    <IntersectingCirclesSpinner color='#ff0000' size={100} />
                    <span>Loading...</span>
                </div>
            }
            {/* <button>
                Load more
            </button> */}
        </Container>
    )
}