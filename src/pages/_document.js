import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {

    return(
        <Html lang="en">
            <meta charSet="utf-8" />
            <link rel="manifest" href="/manifest.json" />
            <Head/>
            

                <body>
                    <Main/>
                    <NextScript></NextScript>
                </body>
        </Html>
    );

}