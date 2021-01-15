// write your custom hook here to control your checkout form
import { useState } from 'react'
import e from 'cors';

const useForm = (intialValue) =>{
    const [value, setValue] = useState(intialValue);
    const handleChanges = e =>{
        setValue({
            ...value, 
            [e.target.name]: e.target.value
        })
    }
    return ([value, setValue, handleChanges])
}

export default useForm