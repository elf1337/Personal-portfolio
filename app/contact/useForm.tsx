import React, { ChangeEvent, useState } from 'react'

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}


function useForm(intialValue:FormData) {
    const [value, setValue] = useState(intialValue)
  return (
    [value,(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setValue({
            ...value,[e.target.name]:e.target.value,
        })
    }] as const
    
  )
}

export default useForm