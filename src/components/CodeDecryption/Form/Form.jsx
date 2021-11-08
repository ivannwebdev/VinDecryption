import React from "react"
import History from "../History/History"
import styles from "./form.module.css"

const Form = (props) => {

    return(
        <form className= {styles.form}>

            <h4 className= {styles.h}>Enter VIN code</h4>

            <input 
            placeholder= 'Your vin'
            className= {styles.input} 
            value= {props.value} 
            onChange= { e => props.input.onChange(e) } 
            onBlur= { e => props.input.onBlur(e)}
            />

            <button className= {styles.button} 
                onClick= {(e) => {
                    e.preventDefault()
                    props.getData(props.input.value)
                }}
            >Check
            </button>

            { (props.input.isDirty && props.input.isEmpty) && <div className= {styles.emptyError}>Can't be empty</div>}

            { props.input.isMaxLength && <div className= {styles.maxError}>Not more than 17</div> }

            { props.input.hasBannedSymbols && <div className= {styles.bannedSymbolsError}>Only letters and numbers!</div> }

            <History 
                getStorageData= {props.getStorageData}
                historyData= {props.historyData}
            />

        </form>
    )
}

export default Form