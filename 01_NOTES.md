# Nextjs: Server-Side Deployment

## A. QUALITY ASSURANCE PRIOR TO DEPLOYMENT

We now have a basic application to push to a live web server.  With our QA revision work in mind, we can enact some testing and adjustments BEFORE and AFTER deployment, in order to smooth out the production process.

**MINOR CHANGES PRIOR TO DEPLOYMENT:**
- `NewsDetail.js`: 
  - Bug fix to the Link/Button to inherit better CSS syntax and work properly **AND** 
  - Minor adjustments to `img` CSS to smooth the borders

&nbsp;

### 1. USER INTERFACER (UI) QA TESTING & FIXES

- (a) `NewsDetail.js`: 

  - Bug fix to the Link/Button to inherit better CSS syntax and work properly **AND** 

  - Minor adjustments to `img` CSS to smooth the borders

- (b) `index.js` / `ausnews.js` / `worldnews.js`: 

  - Adding dynamic `Hero.js` description text for each page, so to make each page properly unique

- (c) `worldnews.js`

  - Removing console logging of error to User & replacing with custom UI Alert to hide error stack

  - Adding some CSS to make the error alert presentable

- (d) `typescript.tsx` / `index.ts`

  - Deletion of development TypeScript placeholders

&nbsp;

### 2. FUNCTIONAL/BETA QA TESTING 

- (a) **NEW** `config` folder

  - Currently, we have HARD-CODED our domain into our `index.js` & `[newsId]` pages, when calling our internal API.  We need to add some "flex" into our application, so this changes to our HOSTED domain in production

  - Create a new `config` folder, and create `index.js` inside

  - We declare a `dev` variable, to note that it is when the ENVs of the web host do not declare the app in production.  Using ternary, we just adjust the domain based on environment

  - Finally, import this into whichever page needs the dynamic domain like `index.js` or `[newsId]` 

  - YOUR *LIKELY* VERCEL DOMAIN: `https://GITHUB-REPO-NAME.vercel.app`

- (b) **ADJUST** `db.json` to `db.js`

  - To avoid any JSON Type Errors, that can occur on deployment, we will adjust our db file to be a JavaScript file, and adjust the data to just export an ARRAY of OBJECTS
  
  - In our API, being `/api/news.js`, we still call the objects in as usual and expose at our endpoint using the `json()` method (DOCUMENTATION: https://nextjs.org/docs/api-routes/response-helpers)

- (c) `index.js` / `ausnews.js`

  - Removal of Console Logs

  - Cleanup of Overused Documentation (already in prior notes, not needed in as much detail for production version)


&nbsp;

## B. DEPLOYMENT TO VERCEL ()

**1. Go to Vercel Hosting: `https://vercel.com/`**

&nbsp;

**2. Sign Up with GitHub**

  - On Sign In, Go to "Import Git Reposity" on the left
    
  - Add GitHub Account in the Box & "Install Vercel"

  - You should now see your GitHub username & repos appear in the box

&nbsp;

**3. Create GitHub Repo for your Next Project**

  - Can do via CLI or GitHub Desktop

  - Create Local Repo -> Commit Initial Build -> Push to GitHub Repo -> Check Repo

&nbsp;

**4. Import Next.js GitHub Repo into Vercel**

  - HINT: You should see a Next.js logo appear on your project, as it recognises the Next technologies!

&nbsp;

**5. Configure Project (Production)**

  - Should not need to adjust any of the default settings

  - **EXCEPTION - Environmental Variables:** We will need to put in our .env.local properties, if used, to ensure they are passed in at production by the web server (NOT UPLOADED TO GITHUB)

  - In our case: NEWS_API_KEY & NEXT_PUBLIC_NEWS_API_KEY, as well as their values (these are encrypted by the web server)

&nbsp;

**6. Deploy & Test**

  - Much like Netlify, the build will occur in the browser.  The UI is *slightly* more annoying, but navigate with it to get used to it (watch class video!) 

  - **NOTE:** You may need to adjust some aspects OR install updates to some modules (e.g. like `pnpm install --no-frozen-lockfile`, which needs Node v14.19).  Just read through the error stack and try to problem solve.  *Dan and I will also be on hand to help as well!*

  - **DO NOT LEAVE DEPLOYMENT TILL WEEK 7** - As you have seen, many things can go wrong on deployment, so leave yourselves plenty of time to adjust and QA test.

&nbsp;

**6. NOTE YOUR DOMAIN**

  - As above in 1., we need to insert our domain into our production `config` file, so the deployment can occur normally!

**7. FINAL NOTE**

  - You may ALSO NOTE on QA testing, that you hit a 426 ERROR with your CSR React SPA page.

  - Unfortunately, NewsAPI only recently CHANGED their pricing model, where you can no longer make requests from the browser/client-side.  If you want to use React API calls, you will need to look for another API / USE YOUR OWN!

  - HOWEVER - our backend API calls to NewsAPI still work (YAY!), so there is some good news!