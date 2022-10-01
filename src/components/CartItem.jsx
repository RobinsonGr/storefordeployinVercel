import React from "react";
import {useContext} from "react";
import AppContext from "context/AppContext";
import iconClose from "assets/icon_close.png";
import styles from "styles/CartItem.module.scss";
import Image from "next/image";




const CartItem = ({item}) => {

    const {initialState: {deleteItem}} = useContext(AppContext);

    const deletingItem = (item) => {
        deleteItem(item);
    };



    return(
        <div className={styles.CartItem}>
        <figure>
            <Image src={item.images[0]} width={240} height={240} alt={item.title}/>
        </figure>
        <p>{item.title}</p>
        <p>{item.price}</p>

        <Image className={styles.iconClose} src={iconClose} onClick={() => deletingItem(item)} alt="Icon Close"/>

    </div>
    );
};

export default CartItem;