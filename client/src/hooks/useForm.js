// write your custom hook here to control your checkout form
import { useState } from 'react'
import localStorage from './useLocalStorage'
import e from 'cors';

const useForm = (intialValue) =>{
    const [value, setValue] = useState(intialValue);
    const handleChanges = evt =>{
        setValue({
            ...value, 
            [evt.target.name]: evt.target.value
        })
    }
    return ([value, setValue, handleChanges])
}

export default useForm