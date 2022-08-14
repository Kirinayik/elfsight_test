import { Action, IFilter } from '../types/types'

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
        case 'clearState':
            return filterInitialState
        default:
            throw new Error('Invalid type')
    }
}
