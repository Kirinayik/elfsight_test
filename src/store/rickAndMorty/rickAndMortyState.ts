import { createSlice } from '@reduxjs/toolkit'
import { IFilter } from '../../types/types'

interface IState {
    filters: IFilter
    page: number
}

const initialState: IState = {
    filters: {
        name: '',
        status: 'all',
        gender: 'all',
        species: 'all',
    },
    page: 1,
}

const rickAndMortySlice = createSlice({
    name: 'rickAndMorty',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload
        },
        nextPage: (state) => {
            state.page += 1
        },
    },
})

export const { setFilters, nextPage } = rickAndMortySlice.actions
export default rickAndMortySlice.reducer
