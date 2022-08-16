import { createEntityAdapter, createSlice, EntityState, PayloadAction } from '@reduxjs/toolkit'
import { ICharacter, IFilter, RootState } from '../../types/types'

export interface IState {
    filters: IFilter
    page: number
    total: number
    characters: EntityState<ICharacter>
}

const charactersAdapter = createEntityAdapter<ICharacter>({
    selectId: (character) => character.id,
})

const initialState: IState = {
    filters: {
        name: '',
        status: 'all',
        gender: 'all',
        species: 'all',
    },
    characters: charactersAdapter.getInitialState(),
    page: 1,
    total: 0,
}

const rickAndMortySlice = createSlice({
    name: 'rickAndMorty',
    initialState,
    reducers: {
        setCharacters: (state, action: PayloadAction<{ total: number; results: ICharacter[] }>) => {
            const { total, results } = action.payload
            charactersAdapter.setAll(state.characters, results)
            state.total = total
            state.page = 1
        },
        updateCharacters: (state, action: PayloadAction<ICharacter[]>) => {
            charactersAdapter.setMany(state.characters, action.payload)
        },
        setFilters: (state, action: PayloadAction<IFilter>) => {
            state.filters = action.payload
            state.page = 1
        },
        nextPage: (state) => {
            state.page += 1
        },
    },
})

export const charactersSelectors = charactersAdapter.getSelectors<RootState>((state) => state.rickAndMorty.characters)

export const { setFilters, setCharacters, updateCharacters, nextPage } = rickAndMortySlice.actions
export default rickAndMortySlice.reducer
