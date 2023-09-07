import Head from "next/head";
import { Helmet } from 'react-helmet';

export default function HeadDiv(){
    return(
        <Head>
        <title>De Pontes Medical Marketing</title>
            <meta charSet="UTF-8"/>
            <meta name="description" content="De Pontes Medical Marketing"/>
            <meta name="keywords" content="Marketing, Medical, Clínica, Odontologia"/>
            <meta name="author" content="https://www.linkedin.com/in/arist%C3%B3teles-rocha-2b677a203/"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="./images/favicon.svg" />
      </Head>
    )
}