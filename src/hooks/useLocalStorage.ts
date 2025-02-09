import { useState } from "react";
/* HELPS SETTING, GETTING and UPDATING VALUES STORED IN BROWSER'S LOCAL STORAGE */

interface IuseLocalStorage {
    key: string;
    initialValue: string;
}

export const useLocalStorage = ({key, initialValue} : IuseLocalStorage) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue
        } catch(error) {
            console.error(error);
            return initialValue
        }
    })

    const setValue = (value: string) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value))
        } catch(error) {
            console.error(error);
        }
    }

    return [storedValue, setValue]
}