import { rootReducer, setupStore } from '../store'

export interface IRickAndMortyResponse {
    info: IInfo
    results: ICharacter[]
}

export interface IInfo {
    count: number
    pages: number
    next: string | null
    prev: string | null
}

export interface ICharacter {
    image: string
    id: number
    name: string
    status: IStatus
    species: string
    episode: string[]
    location: {
        name: string
        url: string
    }
    origin: {
        name: string
        url: string
    }
    url: string
    gender: string
}

export interface IEpisode {
    name: string
    episode: string
    id: number
}

export type IStatus = 'Alive' | 'Dead' | 'unknown'

export interface IFilter {
    name: string
    status: string
    gender: string
    species: string
}

export interface Action {
    type: string
    payload: string
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
