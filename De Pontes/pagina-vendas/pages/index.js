import Head from 'next/head'
import Growth from '../components/Growth'
import Hero from '../components/Hero'
import Method from '../components/Method'
import Secondary from '../components/Secondary'
import { PcBr } from '../components/styles/Sharedstyles'
import Who from '../components/Who'
import Form from '../components/Form'

export default function Home() {
  return (
    <div>
      <Head>
        <title>De Pontes Medical Marketing</title>
            <meta charSet="UTF-8"/>
            <meta name="description" content="De Pontes Medical Marketing"/>
            <meta name="keywords" content="Marketing, Medical, Clínica, Odontologia"/>
            <meta name="author" content="https://www.linkedin.com/in/arist%C3%B3teles-rocha-2b677a203/"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Secondary/>
      <Growth/>
      <PcBr/><PcBr/>
      <Method/>
      <Who/>
      <Form/>
    </div>
  )
}
