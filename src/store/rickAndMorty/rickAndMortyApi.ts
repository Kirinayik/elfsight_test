import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IEpisode, IRickAndMortyResponse } from '../../types/types'

export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (builder) => ({
        getCharacters: builder.query<IRickAndMortyResponse, string>({
            query: () => `/character`,
        }),
        getCharacter: builder.query<any, number>({
            query: (query) => `/character/${query}`,
        }),
        getEpisodes: builder.query<IEpisode[] | IEpisode | undefined, string>({
            query: (query) => `/episode/${query}`,
        }),
    }),
})

export const {
    useGetCharactersQuery,
    useGetCharacterQuery,
    useGetEpisodesQuery,
} = rickAndMortyApi
