import { createContext } from "react";
import type { ComicsContextType } from "../types/comic";


export const ComicsContext = createContext<ComicsContextType | null>(null);

