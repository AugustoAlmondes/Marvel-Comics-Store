import { useQuery } from '@tanstack/react-query';
import { getComics } from '../api/marvel';
import type { ComicCardType } from '../types/comic';

export function useComics() {
    return useQuery<ComicCardType[]>({
        queryKey: ['comics'],
        queryFn: () => getComics().then(res => res.data.data.results),
        staleTime: Infinity,
        select: (data) => {
            return data.map(comic => ({
                ...comic,
                isRare: Math.random() < 0.1
            }))
        }
    });
}