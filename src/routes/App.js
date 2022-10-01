import React from "react";
import { Layout } from "@containers/Layout.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NoFound} from "@templates/NoFound.jsx";
import { Home } from "@templates/Home.jsx";
 import {ProductDetail} from "@containers/ProductDetail.jsx";
import { Orders } from "@templates/Orders.jsx";
import { ShoppingCart } from "@templates/ShoppingCart.jsx";
import { NewPassword } from "@templates/NewPassword.jsx";
import { CreateAccount } from "@templates/CreateAccount.jsx";
import { MyAccount } from "@templates/MyAccount.jsx";
import { PasswordRecovery } from "@templates/PasswordRecovery.jsx";
import { Login } from "@templates/Login.jsx";
import useInitialState from "@hooks/useInitialState.js";
import AppContext from "@context/AppContext.js";





const App = () => {
    const initialState = useInitialState();



    return (
<AppContext.Provider value={initialState} > 
        <BrowserRouter>
            <Layout>
                <Routes>

                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<NoFound />} />
                    <Route path="ProductDetail" element={<ProductDetail />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="ShoppingCart" element={<ShoppingCart />} />
                    <Route path="NewPassword" element={<NewPassword />} />
                    <Route path="CreateAccount" element={<CreateAccount />} />
                    <Route path="MyAccount" element={<MyAccount />} />
                    <Route path="PasswordRecovery" element={<PasswordRecovery />} />
                    <Route path="Login" element={<Login />} />




                </Routes>
            </Layout>
        </BrowserRouter>
</AppContext.Provider>
    );
};

export default App;