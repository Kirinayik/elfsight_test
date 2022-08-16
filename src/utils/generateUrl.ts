import { IFilter } from '../types/types'

export const generateUrl = (filters: IFilter, page: number): string => {
    const params = []

    if (filters.name.trim().length > 0) params.push(`name=${filters.name}`)

    for (const key in filters) {
        if (key === 'name') continue

        const type = key as 'status' | 'gender' | 'species'

        if (filters[type] !== 'all') params.push(`${type}=${filters[type]}`)
    }

    return `?page=${page}&` + params.join('&')
}
