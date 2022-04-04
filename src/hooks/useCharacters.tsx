import { createContext, ReactNode, SyntheticEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from "../services/api";
import md5 from 'md5'

// TODO: REPARAR NA QUANTIDADE QUE MANDA OFFSET E LIMIT PARA TRAZER MAIS
// https://developer.marvel.com/docs#!/public/getComicsCharacterCollection_get_2
// https://developer.marvel.com/documentation/authorization

// TODO: PESQUISAR APENAS 1 TEM QUE TIRAR OFFSET E LIMIT
// TODO: TROCAR AXIOS POR SSR

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
    comics: Comics[]
}

interface CharactersProviderProps {
    children: ReactNode
}

interface CharacterContextData {
    characters: Character[]
    handleClickCharacter: (event: SyntheticEvent,id: number) => void
    detailCharacter?: DetailCharacter
    handleSearchCharacter: (event: SyntheticEvent) => void
    search: string
    setSearch: Function
}

const CharactersContext = createContext<CharacterContextData>({} as CharacterContextData)

const limit = 20
const initialOffset = 20

const ts = process.env.REACT_APP_TS
const publicKey = process.env.REACT_APP_PUBLIC_KEY
const privateKey = process.env.REACT_APP_PRIVATE_KEY
const hash = publicKey && privateKey && md5(ts + privateKey + publicKey)

const params = {
    limit,
    offset: initialOffset,
    ts,
    apikey: publicKey,
    hash
}

export function CharactersProvider({children}: CharactersProviderProps) {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [characters, setCharacters] = useState<Character[]>([])
    const [saveListCharacters, setSaveListCharacters] = useState<Character[]>([])
    const [detailCharacter, setDetailCharacter] = useState<DetailCharacter>()
    const [offset, setOffset] = useState(initialOffset)

    useEffect(() => {
        const loadCharacters = async () => {
            await api.get('/characters', { params }).then((response) => {
                const data = response.data.data.results
                setCharacters(data)
            }).catch((error) => console.log(error))
            // TODO: COLOCAR UM TOAST PARA INDICAR Q DEU ERRADO
        }
        loadCharacters()
    }, [])

    useEffect(() => {
        if (!search){
            setCharacters(saveListCharacters)
            setSaveListCharacters([])
        }
    }, [search])

    const handleClickCharacter = async ( event: SyntheticEvent, id: number) => {
        event.preventDefault()
        const newParams = { ts, apikey: publicKey, hash }
        const character = await api.get(`/characters/${id}`, 
            {
                params: newParams
            }
        ).then((response) => response.data.data.results[0])

        const comics = await api.get(`/characters/${id}/comics`, { params: newParams }).then((response) => response.data.data.results)

        setDetailCharacter({
            ...detailCharacter,
            id: character?.id,
            description: character?.description,
            name: character?.name,
            thumbnail: character?.thumbnail,
            comics: comics
        })
        navigate('/detail_character')        
    }

    const handleSearchCharacter = async (event: SyntheticEvent) => {
        event.preventDefault()
        const newParams = {
            ts, apikey: publicKey, hash, name: search
        }
        await api.get(`/characters`, { params: newParams })
            .then((response) => {
                setSaveListCharacters(characters)
                setCharacters(response.data.data.results)
            })
    }

    return (
        <CharactersContext.Provider
            value={{
                characters,
                 handleClickCharacter, 
                 detailCharacter, 
                 handleSearchCharacter,
                 search, 
                 setSearch
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