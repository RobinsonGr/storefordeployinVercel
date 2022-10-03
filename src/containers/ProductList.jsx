import React from "react";
import ProductItem from "components/ProductItem.jsx";
import styles from "styles/ProductList.module.scss"
import useGetProducts from "../hooks/useGetProducts.js";



const ProductList = () => {

const product = useGetProducts("https://api.escuelajs.co/api/v1/products?limit=120&offset=1")

    return(

    <section className={styles.ProductList}>
       {product.map(x =>  {
        if (x.images.length > 0 && x.images[0] !== '')  {
                return <ProductItem product={x} key={x.id}/>
        } 
       } )}
       

             

       </section>
    )


}

export default ProductList