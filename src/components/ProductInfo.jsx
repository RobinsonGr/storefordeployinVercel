import React from "react";
import styles from "styles/ProductInfo.scss";
import Image from "next/image";


const ProductInfo = () => {


    return(
        <div className="ProductInfo">
            <Image alt=" Product " src="https://hips.hearstapps.com/bpc.h-cdn.co/assets/17/22/smeg-full-size-refrigerator-o-2.jpg" />

            <div className={styles.sliders}>
                <div />
                <div />
                <div />
            </div>

            <section className={styles["product-info"]}>
                <p>$ 120.00</p>
                <p>Retro Refrigerator</p>
                <p className="product-description">With its functonal and practical interior, this refrigetor algo fulfills a decorative funcion. Adding personality and a retro-vintage, aesthetic to your kitchen or workspace</p>
                <button>Add to cart</button>


            </section>
        </div>
    )
}

export default ProductInfo 