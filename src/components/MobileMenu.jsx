import React from "react";
import Image from "next/image";
import closeIcon from "assets/icon_close.png"
import Link from "next/link";
import styles from "styles/MobileMenu.module.scss"
import AppContext from "context/AppContext";
import { useContext } from "react";

const MobileMenu = () => {

const {setToggleMobile} = useContext(AppContext)



    return (
        <menu className={styles["mobile-menu"]}>

    <Image  className={styles["menu-mobile-iconClose"] }src={closeIcon} alt="close Icon" onClick={() => {setToggleMobile(false)}} />

        <ul className={styles["mobile-menu-categories"]}>
            <li><Link href="/">CATEGORIES </Link></li>
            <li><Link href="/">All</Link></li>
            <li><Link href="/"> Clothes</Link></li>
            <li><Link href="/"> Electronics</Link></li>
            <li><Link href="/">Furnitures</Link></li>
            <li><Link href="/"> Toys</Link></li>
            <li><Link href="/"> Others</Link></li>
        </ul>

        <ul className={styles["mobile-menu-actions"]}>
            <li><Link href="/"> My orders</Link></li>
            <li><Link href="/"> My account</Link></li>
        </ul>

        <ul  className={styles["mobile-menu-config"]}>
            <li><Link href="/" className="email"> camilayokoo@gmail.com </Link></li>
            <li><Link href="/" className="sign-out"> Sign out</Link></li>
        </ul>
        </menu>
    )
}

export default MobileMenu