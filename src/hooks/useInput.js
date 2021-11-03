import { useState } from "react"
import { useValidation } from './useValidation';

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState('')
    const [isDirty, setIsDirty] = useState('')
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}