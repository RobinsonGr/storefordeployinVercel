import { useState } from "react";

const useInitialState = () =>{

    const [state, setState] = useState({cart: []});

    const addToCart = (payload) => {

        setState({
            ...state,
            cart: [...state.cart, payload]
        });

   
 
    };

    const deleteItem = (payload) => {

         const outPayload = state.cart.filter(x => x.id !== payload.id );

         console.log(outPayload)
 
        setState({
            ...state,
            cart: [...outPayload]
            
        });
    };


    

    return {
        state,
        addToCart,
        deleteItem,

    };
};

export default useInitialState;