import React from "react"
import Preloader from "./../elements/Preloader"
import styles from "./variableInfo.module.css"

const VinVariable = ({ target }) => {

    if(!target) return <Preloader/>
    return(
        <div className= {styles.wrapper}><div className= {styles.name}>{target.Name}</div><span dangerouslySetInnerHTML= {{__html: target.Description}}/></div>
    )
} 

export default VinVariable;