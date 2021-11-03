import React from "react"
import styles from './footer.module.css'

const Footer = (props) => {
    return <footer className= {styles.footer}>
        <div className= {styles.contacts}><a target= '_blank' href="https://github.com/ivannwebdev">Contacts</a></div>
    </footer>
}

export default Footer