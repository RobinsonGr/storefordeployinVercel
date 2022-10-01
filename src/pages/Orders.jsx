import React from "react"
import Order from "components/Order.jsx"
/* import Image from "next/image"
 */import styles from "styles/Orders.module.scss"


const Orders = () => {

    return (
    
        <main  className={styles.Orders}>
        <section className={styles["Orders-container"]}>

            <Order/>
            <Order/>
            <Order/>
            <Order/>
{/*             <Image src={arrow} />
 */}            

            </section>
            </main>
    
        )
    
    }

    export default Orders