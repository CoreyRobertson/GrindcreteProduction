import React from 'react';
import Form from '@/components/Form';

export const metadata = {
    title: 'Request a Quote - Grind Crete',
    description: 'Get a customized quote for your concrete grinding, sealing, or polishing needs. Grind Crete offers professional services across Melbourne and the Mornington Peninsula.',
    viewport: 'width=device-width, initial-scale=1.0',
    icons: {
        icon: '/images/favicon.ico',
    },
    alternates: {
        canonical: 'https://www.grindcrete.com.au/Quote',
    },
    keywords: 'concrete grinding, concrete sealing, concrete polishing, quote, Melbourne, Mornington Peninsula, Grind Crete',
    openGraph: {
        title: 'Request a Quote - Grind Crete',
        description: 'Get a customized quote for your concrete grinding, sealing, or polishing needs. Grind Crete offers professional services across Melbourne and the Mornington Peninsula.',
        url: 'https://www.grindcrete.com.au/Quote',
        type: 'website',
        images: [
            {
                url: 'https://www.grindcrete.com.au/images/og-image.jpg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Request a Quote - Grind Crete',
        description: 'Get a customized quote for your concrete grinding, sealing, or polishing needs. Grind Crete offers professional services across Melbourne and the Mornington Peninsula.',
        images: [
            {
                url: 'https://www.grindcrete.com.au/images/og-image.jpg',
            },
        ],
    },
};

const RequestQuote = () => {
    return (
        <main>
            <section>
                <Form />
            </section>
        </main>
    );
};

export default RequestQuote;
