import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import AnalyticsHandler from '@/components/AnalyticsHandler';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My App</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ES8GXE4CXC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = function(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ES8GXE4CXC');
            `,
          }}
        />
      </Head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AnalyticsHandler />
      </body>
    </html>
  );
}
