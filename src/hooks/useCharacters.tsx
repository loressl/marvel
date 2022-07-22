import { ChangeEvent, createContext, ReactNode, SyntheticEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getCharacter, getCharacters, getComicsOfCharacter } from "../services/request";

interface Thumbnail {
    path: string
    extension: string
}

export interface Character {
    id: number
    name: string
    description: string
    thumbnail: Thumbnail
    resourceURI: string
    comics: {
        available: number
        collectionURI: string
    }
}

interface Comics {
    id: number
    title: string
    thumbnail: Thumbnail
}

interface DetailCharacter {
    id: number
    name: string
    description: string
    thumbnail: Thumbnail
    totalComics: number
    comics: Comics[]
}

export interface CharactersProviderProps {
    children: ReactNode
}

export interface CharacterContextData {
    characters: Character[]
    handleClickCharacter: (event: SyntheticEvent,id: number) => void
    detailCharacter?: DetailCharacter
    handleSearchCharacter: (event: SyntheticEvent) => void
    search: string
    setSearch: Function
    handleLoadMore: () => void
    totalCharacter: number
    handleLoadMoreCommics: () => void
    handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const CharactersContext = createContext<CharacterContextData>({} as CharacterContextData)

const initialOffset = 20

export function CharactersProvider({children}: CharactersProviderProps) {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [characters, setCharacters] = useState<Character[]>([])
    const [saveListCharacters, setSaveListCharacters] = useState<Character[]>([])
    const [detailCharacter, setDetailCharacter] = useState<DetailCharacter>()
    const [offsetCharacter, setOffsetCharacter] = useState(initialOffset)
    const [totalCharacter, setTotalCharacter] = useState(0)

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                await getCharacters().then((response) => {
                    setTotalCharacter(response?.data.data.total)
                    const data = response?.data.data.results
                    setCharacters(data)
                })                    
            } catch (error) {
                toast.error('Error loading data')
            }
        }
        loadCharacters()
    }, [])

    useEffect(() => {
        if (!search){
            setCharacters(saveListCharacters)
            setSaveListCharacters([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const handleClickCharacter = async ( event: SyntheticEvent, id: number) => {
        try {
            event.preventDefault()
            const character = await getCharacter(id).then((response) => response.data.data.results[0])
    
            var total= 0  
            const comics = await getComicsOfCharacter(id).then((response) => {
                total = response.data.data.total
                return response.data.data.results
            })
            setDetailCharacter({
                ...detailCharacter,
                id: character?.id,
                description: character?.description,
                name: character?.name,
                thumbnail: character?.thumbnail,
                totalComics: total,
                comics: comics,
            })
            navigate('/detail_character')   
        } catch (error) {
            toast.error('Error loading data')
        }     
    }

    const handleSearchCharacter = async (event: SyntheticEvent) => {
        try {
            event.preventDefault()
            await getCharacters(search).then((response) => {
                    setSaveListCharacters(characters)
                    setCharacters(response?.data.data.results)
                })
        } catch (error) {
            toast.error('Error loading data')
        }
    }

    const handleLoadMore = async () => {
        try {
            if (totalCharacter > offsetCharacter) {
                const moreCharacters = await getCharacters(undefined, offsetCharacter+20).then((response) => response?.data.data.results)
                setCharacters((preCharacters) => [...preCharacters, ...moreCharacters])
                setOffsetCharacter(offsetCharacter + 20)
            }
        } catch (error) {
            toast.error('Error loading data')
        }
    }

    const handleLoadMoreCommics = async () => {
        try {
            if(detailCharacter && detailCharacter?.totalComics > detailCharacter?.comics.length) {
                const offset = detailCharacter?.comics.length + 20 >= detailCharacter?.totalComics ? 
                    (detailCharacter?.totalComics - detailCharacter?.comics.length):
                    (detailCharacter?.comics.length + 20)
                const comics = await getComicsOfCharacter(detailCharacter?.id, offset).then((response) => response.data.data.results)
                const newArray = [...detailCharacter?.comics, ...comics]
                setDetailCharacter({...detailCharacter, comics: newArray})
            }  
        } catch (error) {
            toast.error('Error loading data')
        }
    }

    return (
        <CharactersContext.Provider
            value={{
                characters,
                 handleClickCharacter, 
                 detailCharacter, 
                 handleSearchCharacter,
                 search, 
                 setSearch,
                 handleLoadMore,
                 totalCharacter,
                 handleLoadMoreCommics,
                 handleChangeSearch
            }}
        >
            {children}
        </CharactersContext.Provider>
    )
}

export function useCharacters () {
    const context = useContext(CharactersContext)
    return context
}