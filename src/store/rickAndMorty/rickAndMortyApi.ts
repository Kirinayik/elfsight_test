import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IEpisode, IRickAndMortyResponse } from '@global/types'
import { setCharacters, updateCharacters } from './rickAndMortyState'

export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    tagTypes: ['Characters', 'Episodes'],
    endpoints: (builder) => ({
        characters: builder.query<IRickAndMortyResponse, string>({
            query: (params) => `/character${params}`,
            providesTags: () => ['Characters'],
            async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
                try {
                    const {
                        data: { results, info },
                    } = await queryFulfilled
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const { page } = getState().rickAndMorty

                    if (page === 1) {
                        dispatch(setCharacters({ total: info.pages, results }))
                    } else {
                        dispatch(updateCharacters(results))
                    }
                } catch (e) {
                    console.log(e)
                }
            },
        }),
        episodes: builder.query<IEpisode | IEpisode[], string>({
            query: (query) => `/episode/${query}`,
            providesTags: () => ['Episodes'],
        }),
    }),
})

export const { useCharactersQuery, useEpisodesQuery } = rickAndMortyApi
