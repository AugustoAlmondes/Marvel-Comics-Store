import { Bouncy } from 'ldrs/react'
import 'ldrs/react/Bouncy.css'

// Default values shown
export default function Loading() {
    return (
        <>
            <Bouncy
                size="45"
                speed="1.75"
                color="white"
            />
        </>
    );
}