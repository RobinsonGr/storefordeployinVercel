import "styles/global.scss";
import Script from "next/script";
import Header from "components/Header";
import useInitialState from "hooks/useInitialState";
import AppContext from 'context/AppContext';
import { useState } from "react";




function MyApp({ Component, pageProps }) {
  const [toggleMobile, setToggleMobile] = useState(false)

  const initialState = useInitialState();

return (
<> 

<Script 
src="https://www.googletagmanager.com/gtag/js?id=G-S0T5JVT7RX"
strategy="afterInteractive"
/>

<Script 
id="google-analytics"
strategy="afterInteractive"
>
{
  `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-S0T5JVT7RX');
`
}
  </Script>
  
<AppContext.Provider value={{initialState, toggleMobile, setToggleMobile}}> 
  <Header/>
  <Component {...pageProps} />
</AppContext.Provider>
</>
);
}

export default MyApp;
