import Head from 'next/head'
import Hero from '../components/Hero'
import How from '../components/How'
import Secondary from '../components/Secondary'
import Who from '../components/Who'
import HeadDiv from '../components/HeadDiv'
import FAQ from '../components/FAQ'
import Consultoria from '../components/Consultoria'

export default function Home() {
  return (
    <div>
      <HeadDiv/>
      <Hero/>
      <Secondary/>
      <How/>
      <Consultoria/>
      <FAQ/>
    </div>
  )
}
