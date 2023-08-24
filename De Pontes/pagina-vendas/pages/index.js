import Head from 'next/head'
import Growth from '../components/Growth'
import Hero from '../components/Hero'
import Method from '../components/Method'
import Secondary from '../components/Secondary'
import { PcBr } from '../components/styles/Sharedstyles'
import Who from '../components/Who'
import Form from '../components/Form'
import HeadDiv from '../components/HeadDiv'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <div>
      <HeadDiv/>
      <Hero/>
      <Secondary/>
      <Growth/>
      <PcBr/><PcBr/>
      <Method/>
      <Who/>
      <FAQ/>
    </div>
  )
}
