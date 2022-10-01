import React from "react";
import Image from "next/image"
import logo from "assets/logo_yard_sale.svg"
import iconMenu from "assets/icon_menu.svg"
import cartNotification from "assets/icon_shopping_cart_notification.svg"

import styles from "styles/MyAccount.module.scss"


import Head from "next/head";




const MyAccount = () => {

    return (
<>

<Head>
            <title>My Account</title>
        </Head>
    <nav className={styles["MyAccount-nav"]}>
    <Image className={styles["CreateAccout-nav-icon"]} src={iconMenu} alt="nav icon logo"/>
                <Image className={styles["CreateAccout-logo "]} src={logo} alt="crete account"/>
                <Image className={styles["nav-shopping-cart"]} src={cartNotification} alt="shopping cart"/>
    </nav>


<main className={styles.MyAccount}> 
    <section>
         <h1>My account</h1>
        <div> 
        <form>
            <label htmlFor="Name">Name</label>
            <p class="value">Camila Yokoo</p>
           



            <label htmlFor="Email Address">Email Address</label>
            <p class="value">camilayokoo@gmail.com</p>

            <label htmlFor="Password">Password</label>
           <p class="value">******</p>
        </form>

        <button>Create account</button>
    </div>
    </section>
</main>
    
</>
    )
    
}

export default MyAccount