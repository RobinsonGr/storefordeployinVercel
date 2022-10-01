import React from "react"
import styles from "styles/TotalCartItem.module.scss"


const TotalCartItem = () => {

    return(
    <div className={styles.TotalCartItem}>
        <p>
            <span>04.25.2021</span>
            <span>6 articles</span>
        </p>
        <p className="TotalCartItem-price">$560.00</p>

    </div>
    )
}

export default TotalCartItem;