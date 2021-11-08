import React from "react"
import styles from './vinCode.module.css'

const VinCode = (props) => {
    return(
        <div className= {styles.wrapper}>
            {
                props.message && <div className= {styles.message}>{props.message}</div>
            }
            
            {
                props.data &&
                props.data.map((el, i )=> 
                
                    <div className= {styles.item} key= {i.toString()}>
                        <div className= {styles.name}>{el.Variable}:</div> <div>{el.Value}</div>
                    </div>
                )
            }
        </div>
    )
}

export default VinCode