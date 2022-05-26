const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  // Setting Phase
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD
  console.log(`isDev:${isDev}  isProd:${isProd}`)

  const reactStrictMode = true;

  const images = {
    domains: 
      [
        'ichef.bbci.co.uk', 
        'm.files.bbci.co.uk',
        'live-production.wcms.abc-cdn.net.au'
      ],
  }

  const env = {
    SERVER_NAME: (() => {
      if (isDev) return 'http://localhost:3000/'
      if (isProd) return 'https://code-feed.vercel.app/'
    })(),
    GOOGLE_ANALYTICS_ID: 'G-13HXEYDMEP',
  }

  // Next.config is an object
  return {
    reactStrictMode,
    images,
    env,
  }
}