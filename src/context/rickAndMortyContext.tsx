import { createContext, Dispatch, FC, MutableRefObject, useReducer, useRef } from 'react'
import { Action, IFilter } from '../types/types'

type RickAndMortyProviderProps = {
    children: JSX.Element
}

export type RickAndMortyContextValue = {
    state: IFilter
    dispatch: Dispatch<Action>
    currentState: MutableRefObject<IFilter>
}

export const RickAndMortyContext = createContext<RickAndMortyContextValue | undefined>(undefined)

export const filterInitialState: IFilter = {
    name: '',
    status: 'all',
    gender: 'all',
    species: 'all',
}

export const filterReducer = (state: IFilter, action: Action) => {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.payload }
        case 'status':
            return { ...state, status: action.payload }
        case 'gender':
            return { ...state, gender: action.payload }
        case 'species':
            return { ...state, species: action.payload }
        default:
            throw new Error('')
    }
}

export const RickAndMortyProvider: FC<RickAndMortyProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState)
    const currentState = useRef<IFilter>({ ...state })

    return (
        <RickAndMortyContext.Provider value={{ state, dispatch, currentState }}>
            {children}
        </RickAndMortyContext.Provider>
    )
}
