import { PencilLine } from   'phosphor-react'

import styles from '../../src/SideBar.module.css';
import { Avatar } from './Avatar';

export function SideBar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>

            <div className={styles.profile}>
                <Avatar src="https://github.com/Denilson-B-Sousa.png"/>
                <strong></strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#" className={styles.link}><PencilLine/>Editar seu perfil</a>
            </footer>
    
        </aside>
    )
}