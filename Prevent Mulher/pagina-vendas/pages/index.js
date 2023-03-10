import Head from 'next/head'
import Hero from '../components/Hero'
import Areas from '../components/Areas'
import Marcar from '../components/Marcar'
import Sobre from '../components/Sobre'
import Sell from '../components/Sell'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prevent Mulher | Clínica feminina</title>
        <meta name="description" content="Clínica feminina ginecológica"/>
        <meta name="keywords" content="Ultrassonografia, clínica, ginecologista, preventivos"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Areas/>
      <Sell/>
      <Sobre/>
      <Marcar/>
      <Footer/>
    </div>
  )
}
