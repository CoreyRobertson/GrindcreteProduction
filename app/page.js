import Head from 'next/head'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

import Why from '@/components/Why'
import Gallery from '@/components/Gallery'




export default function Home() {
  return (
    <>
      <Head>
        <title>Grindcrete</title>
        <meta name="description" content="Grindcrete offers top-notch concrete grinding, polishing, and sealing services around Melbourne. Transform your space with our expert concrete finishing solutions. Discover our services today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="concrete grinding, concrete polishing, concrete services, floor finishing, concrete sealing, home improvement" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Services />
        <Gallery />

        <Why />
      </main>
    </>
  )
}





