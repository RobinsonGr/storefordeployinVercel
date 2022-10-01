import React from "react"
import ProductInfo from "../components/ProductInfo.jsx"
import close from "@img/icon_close.png"
import Image from "next/image.js"
import styles from "styles/ProductDetail.scss"


const ProductDetail = () => {


    return(
    <aside className={styles.ProductDetail}>
       <div className={styles.close}> 
       <Image src={close} alt="close logo"/> 
       </div> 
        <ProductInfo/>
       
</aside>

    )
}

export  {ProductDetail}



