import React from "react";
import logo from "assets/logo_yard_sale.svg"
import iconMenu from "assets/icon_menu.svg"
import Image from "next/image"
import styles from "styles/CreateAccout.module.scss"
import Head from "next/head";





const CreateAccount = () => {
    return (
        <> 
        <Head>
            <title>Create Acccount</title>
        </Head>

            <nav className={styles["CreateAccout-nav"]}>
                <Image className={styles["CreateAccout-nav-icon"]} src={iconMenu} alt="Nav icon"/>
                <Image className={styles["CreateAccout-logo"]}  src={logo} alt="Create account logo"/>
                <Image className={styles["nav-shopping-cart"]} src={logo} alt="shopping cart"/>
            </nav>

            <main className={styles["CreateAccout-container"]}>
                <section>
                    <h1>My account</h1>
                    <div>
                        <form>
                            <label htmlFor="Name">Name</label>
                            <input type="text"/>

                                <label htmlFor="Email Address">Email Address</label>
                                <input type="text"/>

                                    <label htmlFor="password">password</label>
                                    <input type="password"/>
                                    </form>

                                    <button>Create account</button>
                                </div>
                            </section>
                </main>

            </>
                    )

    }

export default CreateAccount