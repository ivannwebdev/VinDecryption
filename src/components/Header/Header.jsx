import React from "react"
import styles from './header.module.css'
import logo from './../media/logo3.png'

const Header = (props) => {
    return <header className= {styles.header}>
        <h3 className= {styles.h}>VIN decoding</h3>
        <img className= {styles.logo} src={logo} alt= ''/>
    </header>
}

export default Header 