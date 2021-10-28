import { useState, useEffect } from "react";

const getWindowSize = () => {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}