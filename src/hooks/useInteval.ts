import { useEffect, useRef } from "react";

interface IuseInterval {
    callback: () => void;
    delay: number;
}

export const useInterval = ({callback, delay}: IuseInterval) => {
    const savedCallback = useRef({});

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback])

    useEffect(() => {
        if(delay !== null) {
            const id = setInterval(() => savedCallback.current, delay)
            return () => clearInterval(id);
        }
    }, [delay])
}