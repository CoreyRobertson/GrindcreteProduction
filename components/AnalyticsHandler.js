'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '../lib/gtag';

const AnalyticsHandler = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ES8GXE4CXC';
        script.async = true;
        document.head.appendChild(script);

        // Initialize Google Analytics
        const scriptInit = document.createElement('script');
        scriptInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = function(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ES8GXE4CXC');
    `;
        document.head.appendChild(scriptInit);

        const handleRouteChange = () => {
            const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
            gtag.pageview(url);
        };

        handleRouteChange();
    }, [pathname, searchParams]);

    return null;
};

export default AnalyticsHandler;
