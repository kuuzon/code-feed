import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

import * as ga from '../lib/google-analytics/index';

function MyApp({ Component, pageProps }) {
  // OPTIONAL: Allow for Page View Metrics!
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy='afterInteractive'
        />

      <Script 
        id="google-analytics-script" 
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
            
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
