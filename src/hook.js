import {useState} from 'react';
export function useLocalStorage(key,defaultValue){
    const initial = ()=>localStorage.getItem(key) ?? defaultValue
    const [value,setValue] = useState(initial )

    const setAndStoreValue = (newValue) =>{
        setValue(newValue)
        localStorage.setItem(key, newValue)
    }

    return [value,setAndStoreValue]
}