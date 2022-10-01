import {useEffect, useState} from "react";


const useGetProducts = (API) => {

const [product, setProduct] = useState([]);

useEffect( ()  => {
    const fetchdata = async () => {
        const request = await fetch(API);
        setProduct(await request.json());
        
    };
       fetchdata();
        
    });

    return product;


};

export default useGetProducts;