import Head from 'next/head'
import Hero from '../components/Hero'
import Secondary from '../components/Secondary'
import Who from '../components/Who'
import HeadDiv from '../components/HeadDiv'
import FAQ from '../components/FAQ'
import Consultoria from '../components/Consultoria'
import MetaPixel from '../components/MetaPixel'

export default function Home() {
  return (
    <div>
      <HeadDiv/>
      <MetaPixel/>
      <Hero/>
      <Secondary/>
      <Consultoria/>
      <Who/>
      <FAQ/>
    </div>
  )
}
