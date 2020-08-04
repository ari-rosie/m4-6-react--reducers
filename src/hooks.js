import { useEffect } from 'react';

export const FetchData = (url, renderArg, handler) => {
    useEffect(() => {
        try {
            fetch(url)
            .then(res => res.json())
            .then(data => handler(data))
        } catch (error) {
            console.log(error)
        }
    // eslint-disable-next-line
    }, [renderArg]);    
};