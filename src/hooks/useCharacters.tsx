import { createContext, ReactNode } from "react";

// TODO: REPARAR NA QUANTIDADE QUE MANDA OFFSET E LIMIT PARA TRAZER MAIS
// https://developer.marvel.com/docs#!/public/getComicsCharacterCollection_get_2
// https://developer.marvel.com/documentation/authorization

interface Thumbnail {
    path: string
    extension: string
}

interface Character {
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

interface CharactersProviderProps {
    children: ReactNode
}

const CharactersContext = createContext()

export function CharactersProvider({children}: CharactersProviderProps) {



}