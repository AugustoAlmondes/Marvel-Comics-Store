import { useQuery } from '@tanstack/react-query';
import { getComics } from '../api/marvel';
import type { ComicCardType } from '../types/comic';

export function useComics() {
    return useQuery<ComicCardType[]|Error>({
        queryKey: ['comics'],
        queryFn: () => getComics().then(res => res.data.data.results),
        staleTime: Infinity
    });
}