import { createContext, ReactNode, SyntheticEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from "../services/api";
import md5 from 'md5'

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
}

export const CharactersContext = createContext<CharacterContextData>({} as CharacterContextData)

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
    const [offsetCharacter, setOffsetCharacter] = useState(initialOffset)
    const [totalCharacter, setTotalCharacter] = useState(0)

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                await api.get('/characters', { params }).then((response) => {
                    console.log(JSON.stringify(response))
                    setTotalCharacter(response.data.data.total)
                    const data = response.data.data.results
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

    const handleClickCharacter = async ( event: SyntheticEvent, id: number) => {
        try {
            event.preventDefault()
            const newParams = { ts, apikey: publicKey, hash }
            const character = await api.get(`/characters/${id}`, 
                {
                    params: newParams
                }
            ).then((response) => response.data.data.results[0])
    
            var total= 0  
            const comics = await api.get(`/characters/${id}/comics`, { params: newParams }).then((response) => {
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
            const newParams = {
                ts, apikey: publicKey, hash, name: search
            }
            await api.get(`/characters`, { params: newParams })
                .then((response) => {
                    setSaveListCharacters(characters)
                    setCharacters(response.data.data.results)
                })
        } catch (error) {
            toast.error('Error loading data')
        }
    }

    const handleLoadMore = async () => {
        try {
            if (totalCharacter > offsetCharacter) {
                const newParams = {...params, offset: offsetCharacter + 20 }
                const moreCharacters = await api.get('/characters', {params: newParams}).then((response) => response.data.data.results)
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
                const newParams = { ts, apikey: publicKey, hash, offset }
                const comics = await api.get(`/characters/${detailCharacter?.id}/comics`, { params: newParams }).then((response) => response.data.data.results)
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
                 handleLoadMoreCommics
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