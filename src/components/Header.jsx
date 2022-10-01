import React, { useContext } from "react";
import Link from "next/link"
import Image from "next/image.js";
import styles from "styles/Header.module.scss"
import logo from "assets/logo_yard_sale.svg"
import cart from "assets/icon_shopping_cart.svg"
import  Menu  from "./Menu.jsx";
import AppContext from "context/AppContext";
import MyOrders  from "containers/MyOrders.jsx";
import iconMenu from "assets/icon_menu.svg"





const Header = () => {
    const [toggle, setToggle] = React.useState(false)
    const [ordersToggle, setordersToggle] = React.useState(false)
    
    const {initialState: {state}, toggleMobile, setToggleMobile } = useContext(AppContext)

   

    const handlerToggle = ()  => {
        setToggle(!toggle);

    }


return (
    <nav className={styles.Nav}>
    <Image src={iconMenu} onClick={() => {
            setToggleMobile(!toggleMobile)
            }} className={styles.iconMenu} alt="Icon Menu"/>


    <div className={styles["navbar-left"]}>
        <Link href="/"> 
        <Image className={styles.logo} src={logo} alt="Logo"/>
        </Link>


        <ul>
            <li><Link href="/">All</Link></li>
            <li><Link href="/">Clothes</Link></li>
            <li><Link href="/">Clothes</Link></li>
            <li><Link href="/">Electronics</Link></li>
            <li><Link href="/">Furtniture</Link></li>
            <li><Link href="/">Toys</Link></li>
            <li><Link href="/">Others</Link></li>
        </ul>
    </div>


    <section className={styles["navbar-right"]}>
        <ul>
            <li  role="menuitem"
            onClick={handlerToggle}
            onKeyDown={handlerToggle}

            >robinson@comotos.com</li>
            <li  role="menuitem"className={styles["shopping-car"]}
            onClick={()=>{setordersToggle(!ordersToggle)}}
            onKeyDown={()=>{setordersToggle(!ordersToggle)}}
            
            
            >


                <Image src={cart} alt="Cart"/>
               {state.cart.length >= 1 ?  
               <div className={styles["nItems"]}> {state.cart.length } </div> : null}                    


            </li>
        </ul>
        
    </section>
    {toggle && <Menu/>}
    {ordersToggle && <MyOrders setToggle={setordersToggle} Toggle={toggle}/>}
   


</nav>

)
}

export default Header