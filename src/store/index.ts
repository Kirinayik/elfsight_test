import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import { rickAndMortyApi } from './rickAndMorty/rickAndMortyApi'
import rickAndMortyReducer from './rickAndMorty/rickAndMortyState'
import { RootState } from '../types/types'

export const rootReducer = combineReducers({
    rickAndMorty: rickAndMortyReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat(rickAndMortyApi.middleware),
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState,
    })
}
