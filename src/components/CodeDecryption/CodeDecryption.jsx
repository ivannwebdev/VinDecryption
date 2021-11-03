import React  from "react"
import Preloader from "../elements/Preloader"
import Form from "./Form/Form"
import VinCode from "./VinCode/VinCode"
import styles from './codeDecryption.module.css'

const CodeDecryption = (props) => {


    return <div className= {styles.wrapper}>
        <Form 
            onChange= {(value) => props.onInputChange(value)}
            input= {props.input}
            getData= {props.getData}
            getStorageData= {props.getStorageData}
            historyData= {props.historyData}
        />

        <VinCode
            data= {props.state.data}
            message= {props.state.message}
        />
        { props.state.isLoading && <Preloader/> }
            
    </div>
}

export default CodeDecryption