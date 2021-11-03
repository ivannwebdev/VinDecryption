/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import { useEffect, useState } from "react"

export const useValidation = (value, validations) => {

    const [isEmpty, setIsEmpty] = useState(true)
    const [isMaxLength, setIsMaxLength] = useState(false)
    const [hasBannedSymbols, setHasBannedSymbols] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            
            switch (validation) {
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;
                
                case 'maxLength':
                    value.length > validations[validation] ? setIsMaxLength(true) : setIsMaxLength(false)
                     break;
                    
                case 'hasBannedSymbols': 
                    !value.length || /^[a-zA-Z0-9]+$/.test(value) ? setHasBannedSymbols(false) : setHasBannedSymbols(true)
                    
            }
        }
    }, [value])

    return {
        isMaxLength,
        isEmpty,
        hasBannedSymbols
    }
}