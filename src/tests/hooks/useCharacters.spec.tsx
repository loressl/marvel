import { renderHook, act } from '@testing-library/react-hooks';
import AxiosMock from 'axios-mock-adapter';

import { toast } from 'react-toastify'
import { api } from '../../services/api'
import { useCharacters, CharactersProvider, CharactersContext, CharactersProviderProps, CharacterContextData } from '../../hooks/useCharacters'
import md5 from 'md5'
import { mocked } from 'jest-mock'
import { SyntheticEvent } from 'react';

// import * as router from 'react-router'

// const navigate = jest.fn()

// beforeEach(() => {
//   jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
// })

// it('...', () => {
//   ...
//   expect(navigate).toHaveBeenCalledWith('/path')
// })

// jest.mock('react-router-dom', () => {
//     // Require the original module to not be mocked...
//     const originalModule = jest.requireActual('react-router-dom');

//     return {
//         __esModule: true,
//         ...originalModule,
//         // add your noops here
//         useNavigate: jest.fn(() => 'bar')
//     };
// });

const apiMock = new AxiosMock(api)

jest.mock('react-toastify')

const mockedToastError = toast.error as jest.Mock

const params = {
    limit: 5,
    offset: 5,
    ts:1,
    apikey: md5('publicKey'),
    hash: md5(1 + 'privateKey' + 'publicKey')
}

const responseCharacter = {
    data:{
        offset:5,
        limit:5,
        total:1562,
        count:5,
        results:[
            {
                id:1011176,
                name:"Ajak",
                description:"",
                modified:"1969-12-31T19:00:00-0500",
                thumbnail:{
                   path:"http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215",
                   extension:"jpg"
                },
                resourceURI:"http://gateway.marvel.com/v1/public/characters/1011176",
                comics:{
                    available:4,
                    collectionURI:"http://gateway.marvel.com/v1/public/characters/1011176/comics",
                    items:[
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/comics/21175",
                            name:"Incredible Hercules (2008) #117"
                        },
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/comics/21324",
                            name:"Incredible Hercules (2008) #118"
                        },
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/comics/21505",
                            name:"Incredible Hercules (2008) #119"
                        },
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/comics/21707",
                            name:"Incredible Hercules (2008) #120"
                        }
                    ],
                    returned:4
                },
                series:{
                    available:1,
                    collectionURI:"http://gateway.marvel.com/v1/public/characters/1011176/series",
                    items:[
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/series/3762",
                            name:"Incredible Hercules (2008 - 2010)"
                        }
                    ],
                    returned:1
                },
                stories:{
                    available:8,
                    collectionURI:"http://gateway.marvel.com/v1/public/characters/1011176/stories",
                    items:[
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/stories/46776",
                            name:"Incredible Hercules (2008) #117",
                            type:"cover"
                        },
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/stories/46777",
                            name:"Interior #46777",
                            type:"interiorStory"
                        },
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/stories/47097",
                            name:"Incredible Hercules (2008) #118",
                            type:"cover"
                        },
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/stories/47098",
                            name:"Interior #47098",
                            type:"interiorStory"
                        },
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/stories/47415",
                            name:"Incredible Hercules (2008) #119",
                            type:"cover"
                        },
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/stories/47416",
                            name:"3 of 4 - Secret Invasion",
                            type:"interiorStory"
                        },
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/stories/47721",
                            name:"Incredible Hercules (2008) #120",
                            type:"cover"
                        },
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/stories/47722",
                            name:"4 of 4 - Secret Invasion",
                            type:"interiorStory"
                        }
                    ],
                    returned:8
                },
                events:{
                    available:1,
                    collectionURI:"http://gateway.marvel.com/v1/public/characters/1011176/events",
                    items:[
                        {
                            resourceURI:"http://gateway.marvel.com/v1/public/events/269",
                            name:"Secret Invasion"
                        }
                    ],
                    returned:1
                },  
                urls:[
                    {
                        type:"detail",
                        url:"http://marvel.com/characters/111/ajak?utm_campaign=apiRef&utm_source=eee40569e3b2cbc3cb646d711a990b64"
                    },
                    {
                        type:"wiki",
                        url:"http://marvel.com/universe/Ajak?utm_campaign=apiRef&utm_source=eee40569e3b2cbc3cb646d711a990b64"
                    },
                    {
                        type:"comiclink",
                        url:"http://marvel.com/comics/characters/1011176/ajak?utm_campaign=apiRef&utm_source=eee40569e3b2cbc3cb646d711a990b64"
                    }
                ]
            }
        ]
    }
}

const responseComics = {
    data: {
        offset: 0,
        limit: 20,
        total: 1,
        count: 1,
        results: [
            {
                id: 21707,
                digitalId: 10583,
                    title: "Incredible Hercules (2008) #120",
                    issueNumber: 120,
                    variantDescription: "",
                    description: "SACRED INVASION PART 5 Hercules leads the ragged remains of his God Squad into desperate battle with the unimaginably powerful Skrull pantheon -- and if they lose, Earth dies!",
                    modified: "2017-08-16T12:11:01-0400",
                    isbn: "",
                    upc: "5960604745-12011",
                    diamondCode: "JUN082361",
                    ean: "",
                    issn: "",
                    format: "Comic",
                    pageCount: 32,
                    textObjects: [
                        {
                            type: "issue_preview_text",
                            language: "en-us",
                            text: "SACRED INVASION PART 5 Hercules leads the ragged remains of his God Squad into desperate battle with the unimaginably powerful Skrull pantheon -- and if they lose, Earth dies!"
                        },
                        {
                            type: "issue_solicit_text",
                            language: "en-us",
                            text: "SECRET INVASION TIE-IN!\r<br>\"SACRED INVASION\" reaches its cosmos-shattering climax! Hercules leads the ragged remains of his God Squad into desperate battle with the unimaginably powerful Skrull pantheon -- and if they lose, Earth dies! \r<br>Rated A ...$2.99\r<br>"
                        }
                    ],
                    resourceURI: "http://gateway.marvel.com/v1/public/comics/21707",
                    urls: [
                        {
                            type: "detail",
                            url: "http://marvel.com/comics/issue/21707/incredible_hercules_2008_120?utm_campaign=apiRef&utm_source=eee40569e3b2cbc3cb646d711a990b64"
                        },
                        {
                            type: "purchase",
                            url: "http://comicstore.marvel.com/Incredible-Hercules-120/digital-comic/10583?utm_campaign=apiRef&utm_source=eee40569e3b2cbc3cb646d711a990b64"
                        },
                        {
                            type: "reader",
                            url: "http://marvel.com/digitalcomics/view.htm?iid=10583&utm_campaign=apiRef&utm_source=eee40569e3b2cbc3cb646d711a990b64"
                        },
                        {
                            type: "inAppLink",
                            url: "https://applink.marvel.com/issue/10583?utm_campaign=apiRef&utm_source=eee40569e3b2cbc3cb646d711a990b64"
                        }
                    ],
                    series: {
                        resourceURI: "http://gateway.marvel.com/v1/public/series/3762",
                        name: "Incredible Hercules (2008 - 2010)"
                    },
                    variants: [],
                    collections: [],
                    collectedIssues: [],
                    dates: [
                        {
                            type: "onsaleDate",
                            date: "2008-08-20T00:00:00-0400"
                        },
                        {
                            type: "focDate",
                            date: "2008-07-31T00:00:00-0400"
                        },
                        {
                            type: "unlimitedDate",
                            date: "2008-10-16T00:00:00-0400"
                        },
                        {
                            type: "digitalPurchaseDate",
                            date: "2010-10-26T00:00:00-0400"
                        }
                    ],
                    prices: [
                        {
                            type: "printPrice",
                            price: 2.99
                        },
                        {
                            type: "digitalPurchasePrice",
                            price: 1.99
                        }
                    ],
                    thumbnail: {
                        path: "http://i.annihil.us/u/prod/marvel/i/mg/d/40/5152049a94911",
                        extension: "jpg"
                    },
                    images: [
                        {
                            path: "http://i.annihil.us/u/prod/marvel/i/mg/d/40/5152049a94911",
                            extension: "jpg"
                        }
                    ],
                    creators: {
                        available: 6,
                        collectionURI: "http://gateway.marvel.com/v1/public/comics/21707/creators",
                        items: [
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/creators/498",
                                name: "Greg Adams",
                                role: "inker"
                            },
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/creators/9368",
                                name: "Roger Bonet",
                                role: "inker"
                            },
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/creators/570",
                                name: "Klaus Janson",
                                role: "inker"
                            },
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/creators/970",
                                name: "Dennis Calero",
                                role: "colorist"
                            },
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/creators/872",
                                name: "Marte Gracia",
                                role: "colorist"
                            },
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/creators/670",
                                name: "Raul Trevino",
                                role: "colorist"
                            },
                        ],
                        returned: 6
                    },
                    characters: {
                        available: 5,
                        collectionURI: "http://gateway.marvel.com/v1/public/comics/21707/characters",
                        items: [
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011176",
                                name: "Ajak"
                            },
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011227",
                                name: "Amadeus Cho"
                            },
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009343",
                                name: "Hercules"
                            },
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009599",
                                name: "Skrulls"
                            },
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009606",
                                name: "Snowbird"
                            }
                        ],
                        returned: 5
                    },
                    stories: {
                        available: 2,
                        collectionURI: "http://gateway.marvel.com/v1/public/comics/21707/stories",
                        items: [
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/stories/47721",
                                name: "Incredible Hercules (2008) #120",
                                type: "cover"
                            },
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/stories/47722",
                                name: "4 of 4 - Secret Invasion",
                                type: "interiorStory"
                            }
                        ],
                        returned: 2
                    },
                    events: {
                        available: 1,
                        collectionURI: "http://gateway.marvel.com/v1/public/comics/21707/events",
                        items: [
                            {
                                resourceURI: "http://gateway.marvel.com/v1/public/events/269",
                                name: "Secret Invasion"
                            }
                        ],
                        returned: 1
                    }
                },
            ]
        }
}

const defaultValue = {
    characters: [],
    handleClickCharacter: jest.fn(),
    detailCharacter: {},
    handleSearchCharacter: jest.fn(),
    search: '',
    setSearch: jest.fn(),
    handleLoadMore: jest.fn(),
    totalCharacter: 0,
    handleLoadMoreCommics: jest.fn()
} as unknown as CharacterContextData

describe('useCharacters hook', () => {
    it('load characters', () => { 
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom') as any,
            useNavigate: () => jest.fn()
        }))
        const value = {
            ...defaultValue,
            characters: responseCharacter.data.results,
            totalCharacter: responseCharacter.data.total,
        }
        const wrapper = ({children}: CharactersProviderProps) => <CharactersContext.Provider value={value} >{children}</CharactersContext.Provider>
        const { result } = renderHook(useCharacters, { wrapper })

        expect(result.current.characters).toBe(responseCharacter.data.results)
        expect(result.current.totalCharacter).toBe(responseCharacter.data.total)
    })

    it('click on a character', () => {
        const newParams = { ts: params.ts, apikey: params.apikey, hash: params.hash }
        const id = responseCharacter.data.results[0].id
        apiMock.onGet(`/characters/${id}`, {params: newParams}).reply(200, responseCharacter.data.results[0])
        apiMock.onGet(`/characters/${id}/comics`, { params: newParams }).reply(200, responseComics.data.results[0])

        const detail = {
            id: responseCharacter.data.results[0].id,
            description: responseCharacter.data.results[0].description,
            name: responseCharacter.data.results[0].name,
            thumbnail: responseCharacter.data.results[0].thumbnail,
            totalComics: responseComics.data.total,
            comics: responseComics.data.results[0],
        }
        const value = {
            ...defaultValue,
            detailCharacter: detail
        } as unknown as CharacterContextData
        const wrapper = ({children}: CharactersProviderProps) => <CharactersContext.Provider value={value} >{children}</CharactersContext.Provider>
        const { result } = renderHook(useCharacters, { wrapper })

        act(() => {
            result.current.handleClickCharacter(event as unknown as SyntheticEvent, id)
            jest.mock('react-router-dom', () => ({
                ...jest.requireActual('react-router-dom') as any,
                useNavigate: () => jest.fn(() => '/detail_character')
            }))
        })
        expect(result.current.detailCharacter).toBe(detail)
    })

    it('error in api on click a character', () => {
        const newParams = { ts: params.ts, apikey: params.apikey, hash: params.hash }
        const id = responseCharacter.data.results[0].id
        apiMock.onGet(`/characters/${id}`, {params: newParams}).reply(500)
        apiMock.onGet(`/characters/${id}/comics`, { params: newParams }).reply(500)

        const wrapper = ({children}: CharactersProviderProps) => <CharactersContext.Provider value={defaultValue} >{children}</CharactersContext.Provider>
        const { result } = renderHook(useCharacters, { wrapper })

        act(() => {
            result.current.handleClickCharacter(event as unknown as SyntheticEvent, id)
        })

        expect(result.current.detailCharacter).toEqual({})
    
    })
})