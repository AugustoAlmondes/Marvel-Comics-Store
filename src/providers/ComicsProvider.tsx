// contexts/ComicsContext.tsx
import { useGetComics } from '../hooks/useGetComics';
import { ComicsContext } from '../contexts/ComicsContext';

export function ComicsProvider({ children }: { children: React.ReactNode }) {
    const { data, isLoading, error, refetch } = useGetComics();

    const value = {
        comics: data || [],
        isLoading,
        error: error as Error | null,
        refetch,
    };

    return (
        <ComicsContext.Provider value={value}>
            {children}
        </ComicsContext.Provider>
    );
}