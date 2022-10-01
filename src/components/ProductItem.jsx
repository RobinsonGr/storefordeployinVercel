import React, { useContext } from "react";
import addCart from "assets/bt_add_to_cart.svg"
import addedCart from "assets/bt_added_to_cart.svg"
import AppContext from "context/AppContext";
import Image from "next/image";
import styles from "styles/ProductItem.module.scss"






const ProductItem = ({product}) => {

    const {initialState:{addToCart, deleteItem}} = useContext(AppContext)

    const [productIn, setProductIn] = React.useState(0)


    const handleClick = () => {

        setProductIn(product.id)

        if(productIn) {
            deleteItem(product) 
            setProductIn(0)
   
         } else {
            addToCart(product)
         }
         console.log(productIn)

    }

    


    return (

    <div className={styles.ProductItem}>

         <Image src={product.images[0]} height={240} width={240} alt={product.title}/> 
            <div className={styles["ProductItem-info"]}>
                <div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>


                <div className={styles["btn-container"]} role="button"
                    tabIndex={0}
                    onClick={() => handleClick(product)}
                    onKeyDown={() => handleClick(product)}
                >
                    {productIn > 0 ? <Image className={styles.addcart} src={addedCart} alt="Element in logo" /> : <Image className={styles.addcart} src={addCart}  alt="Element in logo" />}
                </div>

        </div>
    </div>
 )   
}

export default ProductItem
