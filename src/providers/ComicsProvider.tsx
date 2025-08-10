// contexts/ComicsContext.tsx
import { useGetComics } from '../hooks/useGetComics';
import { ComicsContext } from '../contexts/ComicsContext';
import { useMemo, useState } from 'react';

export function ComicsProvider({ children }: { children: React.ReactNode }) {
    const { data, isLoading, error } = useGetComics();
    const [currentPage, setCurrentPage] = useState(1);
    const COMICS_PER_PAGE = 20;

    const { comics, rareComics, paginatedComics, totalPages } = useMemo(() => {
        if (!data) {
            return {
                comics: [],
                rareComics: [],
                paginatedComics: [],
                totalPages: 0
            };
        }

        // Calcula paginação
        const startIndex = (currentPage - 1) * COMICS_PER_PAGE;
        const endIndex = startIndex + COMICS_PER_PAGE;
        const paginated = data.slice(startIndex, endIndex);
        const totalPages = Math.ceil(data.length / COMICS_PER_PAGE);

        return {
            comics: data,
            rareComics: data.filter(c => c.isRare),
            paginatedComics: paginated,
            totalPages
        };
    }, [data, currentPage]);

    return (
        <ComicsContext.Provider value={{
            comics,
            rareComics,
            currentPage,
            totalPages,
            isLoading,
            error,
            setCurrentPage,
            paginatedComics
        }}>
            {children}
        </ComicsContext.Provider>
    );
}