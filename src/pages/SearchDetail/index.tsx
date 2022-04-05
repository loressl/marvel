import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { useCharacters } from '../../hooks/useCharacters';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Loading } from '../../components/Loading';
import { useEffect, useState } from 'react';

import deapool from '../../assets/images/deapool.png'

export function SearchDetail () {
    const navigate = useNavigate()
    const { detailCharacter, handleLoadMoreCommics } = useCharacters()
    const [withoutComics, setWithoutComics] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (!detailCharacter?.comics.length) {
                setWithoutComics(true)
            } else {
                setWithoutComics(false)
            }
        }, 4000)
    }, [detailCharacter])

    return (
        <Container>
            <Button maxWidth={10} width={100} name='Back to search' onClick={() => navigate('/')}/>
            {detailCharacter ? <div className='details'>
                <img className='image_hero' src={detailCharacter?.thumbnail.path + '.' + detailCharacter?.thumbnail.extension} alt=''/>
                <div className='details_elements'>
                    <span className='name_hero' >{detailCharacter?.name}</span>
                    {detailCharacter?.description ? 
                        <span className='description'>{detailCharacter?.description}</span>
                        : <span className='description'>Without description</span>}
                    <span className='comics_title'>Comics</span>
                    {!!detailCharacter?.comics.length ? 
                        <>
                            <div className='comics'>
                                {detailCharacter?.comics.map((value) => 
                                    <Card 
                                        cursor="initial"
                                        maxWidth={15}
                                        height={25}
                                        id={value?.id}
                                        name={value?.title}
                                        image={value?.thumbnail.path + '.' + value?.thumbnail.extension}
                                        key={value?.id}
                                    />
                                ) }
                            </div>
                            {detailCharacter?.totalComics > detailCharacter?.comics.length &&
                                <Button 
                                    onClick={handleLoadMoreCommics}
                                    width={100}
                                    maxWidth={10}
                                    name='Load more'
                                />
                            }
                        </>
                        : withoutComics ? <span className='without_comics'>Without Comics</span> :<Loading />}
                </div>
            </div>: 
            <div className='no_details'>
                <span className='no_details_text'>No details, do a search</span>
                <img className='no_details_image' src={deapool} alt="no details"/>
            </div>}
        </Container>
    )
}