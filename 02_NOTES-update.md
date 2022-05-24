# Nextjs: Server-Side Deployment

## C. UPDATES TO DEPLOYED WEB APPLICATION

On setting up our production version, we still have some optimisations and features we would like to include, in a further deployment update:

&nbsp;

### 1. IMAGE OPTIMISATION WITH NEXT.JS "IMAGES"

Next Images is a highly marketed featured built into Next.js.  It allows a developer to access any static images stored within the public directory anywhere in your app, **with the ability to enact image optimisation on the fly.**

- *MARKETING BLURB: "The Next.js Image component, next/image, is an extension of the HTML <img> element, evolved for the modern web. It includes a variety of built-in performance optimizations to help you achieve good Core Web Vitals. These scores are an important measurement of user experience on your website, and are factored into Google's search rankings."*

**DOCUMENTATION:** https://nextjs.org/docs/basic-features/image-optimization & https://nextjs.org/docs/api-reference/next/image

- (a) IMAGE:

  - When we run `yarn build` (`npm run build`), it will provide us with warnings for each of the components that currently are NOT utilising the Next Image feature - `NewsDetail.js` & `NewsItem.js`(x2)

  - Replace the default HTML `img` with Next `Image` & make sure to import the component from Next library: `import Image from 'next/image'`

- (b) DEFAULT PROPS:

  - By default we MUST include the following props: `src`, `alt`, `height` & `width`

  - You will find you will need to adjust and play with the height & width to find the optimal aspect ratio & resolution

- (c) LAYOUT:

  - This allows one to adjust the layout behavior of the image as the viewport changes size and can be one of the following values: `instrinsic`, `fixed`, `responsive`, `fill` or `raw`

- (d) LAZY LOADING: 

  - By default, the Next Images are set to be "lazy loaded", meaning that it will note the position of the image on the page, and only load the image after the user scrolls down a set distance.  This aids performance.

  - We can change this to load on initial load by setting `loading={eager}`

- (e) PRIORITY: 

  - By setting this prop to `priority={true}`, you allow for the image to be pre-rendered, again optimising performance

- (f) UNCONFIGURED HOST: 

  - These changes will work well for our images pulled from our static files.  HOWEVER, when pulling images from outside sources, like our NewsAPI, `<Image>` will block them to prevent malicious images brought in (security!)

  - To allow these through, we need to authorise the hostname for those images inside `next.config.js`

  - We pass them in as valid `hostnames` inside of the `domain` array.  To find the hostname, the error on each of the API pages, provides them to us!

  - DOCS: https://nextjs.org/docs/messages/next-image-unconfigured-host

&nbsp;

### 2. GOOGLE ANALYTICS INTEGRATION WITH NEXT.JS "SCRIPTS"

**DOCUMENTATION:** https://nextjs.org/docs/basic-features/script

- 

&nbsp;

### 3. METADATA & SEO WITH NEXT.JS "HEAD" ELEMENTS

**DOCUMENTATION:** https://nextjs.org/docs/api-reference/next/head

- 