import React from "react";
import arrow from "assets/flechita.svg"
import Image from "next/image"
import styles from "styles/Order.module.scss"


const Order = () => {

    return (
        <div className={styles["order-container"]}>
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>

            <p>$120.00</p>
            <span><Image src={arrow} alt="arrow"/></span>
        </div>
    )
} 

export default Order;