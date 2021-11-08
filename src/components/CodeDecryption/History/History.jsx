import React from 'react'
import styles from './history.module.css'

const History = (props) => {
    return <div className= {styles.wrapper}>
            {
            (props.historyData.vinData && props.historyData.vinKeys) ? 

            <div>
                {props.historyData.vinKeys.map( (el, i) => 
                
                <div className= {styles.historyItem} onClick= {() => props.getStorageData(i)} key= {el.toString()}>
                    {el.split(':')[1]}
                </div>
                )}
            </div> 

            : 

            <div>No history</div>
            }
    </div>
}

export default History