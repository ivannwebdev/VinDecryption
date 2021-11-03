import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import Preloader from "./../elements/Preloader"
import styles from './vinVariables.module.css'



const VinList = (props) => {

    useEffect(() => 
        props.getList(),
        []
    )


    if(!props.list) return <Preloader/>

    return  <div className= {styles.wrapper}>
            {
                props.list.map(el => <div className= {styles.item} key= {Math.random()}>
                    
                    <NavLink to= {`/variables/${el.ID}`}>
                        
                        <span>{el.Name}:</span> 
                    
                    </NavLink>
                    <span dangerouslySetInnerHTML= {{__html: el.Description}}/>
                    
                </div>
                )
            }
        </div>

}

export default VinList