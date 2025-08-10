export interface ComicCardType {
    id: number;
    title: string;
    pageCount?: number;
    textObjects: [
        {
            text: string
        }
    ];
    thumbnail: {
        path: string;
        extension: string;
    };
    prices: {
        type: string;
        price: number;
    }[];
    creators?: {
        items: {
            name: string;
            role: string;
        }[];
    };
    isRare?: boolean;
}

export interface ComicsContextType {
    comics: ComicCardType[];
    isLoading: boolean;
    error: Error | null;
    refetch: () => void;
}