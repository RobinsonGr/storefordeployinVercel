import React, { useContext } from "react";
import arrow from "assets/flechita.svg"
import CartItem from "components/CartItem.jsx";
import AppContext from "context/AppContext.js";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/MyOrder.module.scss"



const MyOrders = ({setToggle}) => {

	const {initialState: {state}} = useContext(AppContext)


	const reducer = () => {

		return state.cart.reduce( (a , b) => {return a + b.price}, 0) 
		
	}


	return (
		<aside className={styles.MyOrder}>
   

			<div className={styles["title-container"]}>
				<Image src={arrow} onClick={() => {setToggle(false)}} alt="arrow" />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles["my-order-content"]}>


			{state.cart.map(x => { 
			return <CartItem item={x} 
			key={ `orderItem${x.id}`} /> })}
			</div>
				
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>{reducer()}</p>
				</div>
				<Link href="Orders">
				<button className={styles["primary-button"]}>
					Checkout
				</button>
				</Link>
			
		</aside>
	);
}

export default MyOrders