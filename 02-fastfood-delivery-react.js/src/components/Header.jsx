import React from 'react'
import styles from '../../src/App.module.css'
import { Navbar } from './Navbar'

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="../../src/assets/chef-hat.svg" alt="Chápeu Branco chefe de restaurante"/>
                <h1 className={styles.logoTitle}>Foo</h1>
            </div>
            <Navbar/>
            <input type="search" placeholder="Search..." className={styles.search}/>
            <a href='#' ><img src="../../src/assets/shopping-cart.svg" alt="Carrinho de Compras"/></a>
        </header>
    )
}