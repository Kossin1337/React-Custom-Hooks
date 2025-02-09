import { useState, useEffect } from 'react'

interface IDebounce {
    value: number;
    delay: number;
}

export const useDebounce = ({value, delay}: IDebounce) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(handler)
    }, [value, delay])

    return debounceValue
}