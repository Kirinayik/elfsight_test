import { store } from '../store'

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
    }
    origin: {
        name: string
    }
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
