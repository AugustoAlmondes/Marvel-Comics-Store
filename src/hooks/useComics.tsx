import { useContext } from "react";
import { ComicsContext } from "../contexts/ComicsContext";

export function useComics() {
    const context = useContext(ComicsContext);
    if (!context) {
        throw new Error('useComics must be used within a ComicsProvider');
    }
    return context;
}