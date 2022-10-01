import React from "react";
import { useRef } from "react";
import Image from "next/image";
import Logo from "assets/logo_yard_sale.svg"
import styles from "styles/Login.module.scss"
import Head from "next/head";




const Login = () => {


    const form = useRef(null);


    const handlerSubmit = (event) =>{
        event.preventDefault()

        const formData = new FormData(form.current)

        const data = {
            username : formData.get("email"),
            password  : formData.get("password")
        }

        console.log(data)
       
    }


    return (
        <> 
        <Head>
            <title>Login</title>
        </Head>
        <main className = {styles.Login}>
            <section className={styles["Login-container"]}>
               <Image className={styles["Login-logo"]} src={Logo} alt="logo"/>
               <form className={styles["Login-form" ]} ref={form}> 
                    <label htmlFor="Email Address" className={styles["Login-label"]} >Email Address</label>
                    <input className={styles["Login-input"]} name="email" placeholder="name@example.com" />
                    <label htmlFor="Password" className={styles["Login-label"]}>Password</label> 
                    <input className={styles["Login-input"]} name="password" placeholder="*****" /> 
                    <input type="submit" onClick={handlerSubmit} value="Log in" className={styles["input-button"]} />
                    <p className="forgot">Forgot my password</p>
                </form>
                <button className={styles["className-signBtn"]} >Sign up</button>
            </section>
        </main>
        </>
        )
}



export default Login