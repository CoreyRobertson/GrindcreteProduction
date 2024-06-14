'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '../lib/gtag';

const AnalyticsHandler = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleRouteChange = () => {
            const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
            gtag.pageview(url);
        };

        handleRouteChange();
    }, [pathname, searchParams]);

    return null;
};

export default AnalyticsHandler;
