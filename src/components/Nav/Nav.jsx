import React from "react"
import { NavLink } from "react-router-dom"
import styles from './nav.module.css'

const Nav = (props) => {
    return <nav className= {styles.nav}>
        <NavLink exact className= {styles.link} activeClassName= {styles.active} to= '/'>Fom</NavLink>
        <NavLink exact className= {styles.link} activeClassName= {styles.active}  to= '/variables/'>Variables</NavLink>
    </nav>
    
}

export default Nav