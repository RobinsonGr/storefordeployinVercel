import ProductList from "containers/ProductList";
import MobileMenu from "components/MobileMenu";
import { useContext } from "react";
import AppContext from "context/AppContext";


export default function Home() {

  const {toggleMobile, setToggleMobile} = useContext(AppContext)


  return (
<>
<ProductList/>
{toggleMobile && <MobileMenu x={toggleMobile} y={setToggleMobile}/>}


</>
  );
}
