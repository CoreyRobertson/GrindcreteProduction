import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Why from '@/components/Why'
import Gallery from '@/components/Gallery'

export const metadata = {
  title: 'Grind Crete',
  description: 'Grind Crete offers top-notch concrete grinding, polishing, and sealing services around Melbourne. Transform your space with our expert concrete finishing solutions. Discover our services today.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/favicon.ico',
  },
  keywords: 'concrete grinding, concrete polishing, concrete services, floor finishing, concrete sealing, home improvement',
  openGraph: {
    title: 'Grind Crete',
    description: 'Grind Crete offers top-notch concrete grinding, polishing, and sealing services around Melbourne. Transform your space with our expert concrete finishing solutions. Discover our services today.',
    url: 'https://www.grindcrete.com.au',
    type: 'website',
    images: [
      {
        url: 'https://www.grindcrete.com.au/images/og-image.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grind Crete',
    description: 'Grind Crete offers top-notch concrete grinding, polishing, and sealing services around Melbourne. Transform your space with our expert concrete finishing solutions. Discover our services today.',
    images: [
      {
        url: 'https://www.grindcrete.com.au/images/og-image.jpg',
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Why />
    </main>
  )
}
