import React from "react";
import styles from "styles/NewPassword.module.scss"
import logo from "assets/logo_yard_sale.svg"
import Image from "next/image";

const NewPassword = () => {

    return (
    <main className={styles.NewPassword}>
        <div className = {styles["NewPassword-container"]}>
         <Image src={logo} alt="logo"/>
            <h1>Create a new password</h1>
            <p>Enter a new password for your account</p>
            

            <form>
                <label htmlFor="Password" className={styles.label} for="password">Password</label>
                <input className={styles.input} id="password" type="password" placeholder="******"/>
                <label htmlFor="New Password" className={styles.label} for="new-password">New Password</label>
                <input className={styles.input} id="new password" type="password" placeholder="******"/>

                <input className={styles["login-button"]} type="submit" value="Confirm" />
            </form>

        </div>
    </main>
  

    )
}

export default NewPassword