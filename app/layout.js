import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnalyticsHandler from '@/components/AnalyticsHandler';

export const metadata = {
  title: 'Grind Crete',
  description: 'Grind Crete offers top-notch concrete grinding, polishing, and sealing services around Melbourne. Transform your space with our expert concrete finishing solutions. Discover our services today.',
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: 'concrete grinding, concrete polishing, concrete services, floor finishing, concrete sealing, home improvement',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: 'Grind Crete',
    description: 'Grind Crete offers top-notch concrete grinding, polishing, and sealing services around Melbourne. Transform your space with our expert concrete finishing solutions. Discover our services today.',
    url: 'https://www.grindcrete.com.au',
    type: 'website',
    images: [
      {
        url: 'https://www.grindcrete.com.au/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Grind Crete',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grind Crete',
    description: 'Grind Crete offers top-notch concrete grinding, polishing, and sealing services around Melbourne. Transform your space with our expert concrete finishing solutions. Discover our services today.',
    image: 'https://www.grindcrete.com.au/images/og-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AnalyticsHandler />
      </body>
    </html>
  );
}
