import React from "react";
import CartItem from "components/CartItem.jsx";
import Head from "next/head";
import styles from "styles/ShoppingCart.module.scss"




const ShoppingCart = () =>{




    return(
        <> 
        <Head>
            <title>Shopping Cart</title> </Head>

        <div className={styles.ShoppingCart}>
        <div className={styles["ShoppingCart-container"]}>
            <h1 className={styles["ShoppingCart-tittle" ]}>My order</h1>
            <div className={styles["Checkout-content"]}>
                <div className={styles.order}>
                    <p>
                        <span>03.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560.00</p>
                </div>
            </div>
            <CartItem item={{
                title: "dress",
                price: "2.9",
                images: [
                    "https://s3-us-west-2.amazonaws.com/melingoimages/Images/28785.jpg"
                ]
            }} />
        </div>
    </div>
    </>

    )
}

export default ShoppingCart