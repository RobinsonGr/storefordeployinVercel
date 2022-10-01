import React from "react";
import Image from "next/image";
import emailImg from "assets/email.svg"
import styles from "styles/PasswordRecovery.module.scss"

const PasswordRecovery = () => {
    return (
        <main className={styles["PasswordRecovery-container"]}>
            <div className={styles["PasswordRecovery-email-container"]}>
                <h1>Email has been sent</h1>
                <p class="email-description">Please check your inbox for instructions on how to reset the passoword</p>

                <figure>
                    <Image src={emailImg} alt="Email img"/>
                </figure>

                <button>Login</button>
                <p className={styles["email-text-footer"]}></p>

            </div>

        </main>


    )
}

export default PasswordRecovery;
