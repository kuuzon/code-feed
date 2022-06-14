# Nextjs: Bonus Content
## B. SIMPLIFIED "CODLE" APPLICATION USING NEXT.JS

**PREAMBLE**

The real-life build of "Wordle" application was built by Josh Wardle in late 2021, an experienced software engineer based in New York.  What started as a fun side-project for his partner to play with, had over a million of unique users by start of 2022!  Not long after, the rights for the application were purchased for a "low-seven-figure sum" by the New York Times, and the rest is history.

**BUILD EXPECTATIONS**

Whilst it may look simple, the application has many fluid and feature-rich aspects hidden under the hood.  It was also built by a software engineer with signficant coding experience. 

These factors should be considered to *temper* expectations, in that we will ONLY build a simple version of Wordle, known as `"Codle"`, a wordle for web developers!

**HOWEVER ...**

... whilst it may seem complex to build at the end of this lesson, it is not impossible, particularly as there are now many different guides on how to build it and add-on additional features such as "hard modes" or local game state memory.  Not only that, but a fleshed out version of Wordle is a good demonstration of coding ability in React.js / Next.js and hits on many aspects we have covered, like:

  - File structure conventions & routing
  - Server-side rendering & data fetching
  - Use of React.js lifecycle methods
  - Construction of Next.js API
  - Good JSX syntax
  - Integration of SASS into React/Next applications
  - Understanding of higher order array methods, string manipulation & integer methods

*BEST GUIDE (I have found) ON COMPLEX WORDLE APPLICATION: https://youtu.be/WDTNwmXUz2c*

&nbsp;

### 1. SETUP OF PAGE
**GOAL:** Setup a blank page with a sub-header UI (*stating "Codle"*) to allow us to then program in the Wordle clone

  - (a) Build of base template with `Fragment` wrapper & `Head` details

  - (b) Import `Container` UI & adapt `.scss` module to flex to codle styling requirements for the route

    - Important to add to our `variables.scss` with the required colors & font-families
    
    - We also should use overflow to ensure the entire page is canvased

  - (c) Build `CodleNav` to house the sub-navbar & any future sub-routes for Codle like Settings, Stats, etc (setup minor styling too)

&nbsp;

### 2. SETTING THE ANSWER WORD
**GOAL:** Call our custom Code Word API, apply higher order methods to find a random single word & set to our Codle component using server-side rendering

  - (a) Create `codle.js` & export our array of custom code words

  - (b) Create a **NEW** Next.js API route directory called `game` with `codle.js` as its' only child file:

    - Import the codle array from the `database` directory

    - Set it to be returned as a `response` from this endpoint via invoked `json` method

  - (c) Call `getServerSideProps` below component function:

    - Call the codle endpoint, using our dynamic `process.env.SERVER_NAME` & set output as response.data

    - Declare `randomNum` which will create a rounded, random number that MUST be within the total number of array positions in the `codle.js` array

    - Call this "position" from the `data` variable, which contains the `codle.js` array

    - Declare this word as `answer` variable & return as a component `prop`

  - (d) Using destructuring, pass the `answer` prop into the `CodlePage` component for later use

&nbsp;

### 3. CREATING "BOARD" UI TO ALLOW USER GUESS
**GOAL:** We need to create a "form" that will allow the User to input their guesses, cap the number of guesses & record their guesses into state at the top-level of the `CodlePage`

  - (a) Set user `guesses` as top-level state

    - Set `guesses` initial state as an empty array (*will need to contain up to 5 guesses, each one at a new position*)

    - Create a "refresh" `useEffect`, where if the `answer` changes (on refresh of page), it will `setGuesses` back to initial state (*you could also do this to call localStorage instead*)

  - (b) Create **NEW** `Board` component to allow user input of guesses 

    - Create initial state of `guess` with `setGuess` state setter & initial state of empty string

    - ALSO pass in the parent-level state `guesses` & its state setter `setGuesses` as props, so it can save the form user guesses 

    - Create basic form in the return, which will link to the `module.scss` styles, set max length of 5 & take the `value={guess}` state

    - Create a `handleChange` function, to change the string value passed into state as LOWER CASE (*using regular expression we also CHANGE ANYTHING OTHER than letters to an empty string - `/g` means a global replacement (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)*)

    - Create a `handleSubmit` function to do **THREE THINGS** (i)"save" the guess to parent `guesses` state, (ii) reset the form `guess` state to initial value **AND** (iii) if the number of guesses has NOT hit 5, to reset the form & return user to guessing

  - (c) Back in `CodlePage`, set `guesses` & `setGuesses` as props to the `Board` component

&nbsp;

### 4. CREATING "BOARD" TO SHOW PAST USER GUESSES
**GOAL:** We need to display the guesses the users made & letter clues (via different colors) so they understand if they are making correct letter guesses & positions

**NOTE:** This has the trickiest syntax, as it can look a little overwhelming - try to just focus on the CORE function occurring

  - (a) Create **NEW** `BoardGuesses.js` & call below `Board` component in the `CodlePage` return.  It will take the `guesses` & `answer` props

  - (b) Create a board, pass in props & board will `map` a row within.  Each ROW is to be a new guess made by the user

  - (c) Within this ROW `map`, we will need to split up the letters of the guess word & `map` EACH LETTER to a `<span>` tile, which we create using the `module.scss` styling

    - Each time we map, we make sure to set an `guessIndex` or `letterIndex` as the key

    - Within the letter tile `map`, we pass base styling of `styles.tile`

    - We also make sure the `<span>` displays EACH split `letter`

  - (d) We now need to create a new `services.js` to declare `getLetterBackgroundColor` function to give letter & position clues

    - I won't go into too much detail here, as the function is a bit repetitive, but basically, it tracks the guess index & answer index.

    - If they match, it means the letter is in the correct spot & it returns styling (`styles.correct`) that makes the tile green

    - If the answer has a guess letter, but is NOT in the correct position (using several string manipulation methods), return the styling (`styles.present`) that makes tile yellow

    - Otherwise, return default tile color (`styles.empty`), being grey

    - Using template literals & JSX, we call the `getLetterBackgroundColor` function within the `className` JSX for the letter `<span>` map section

&nbsp;

### 5. SETTING WIN / LOSE CONDITIONS & GAME OVER UI
**GOAL:** Set win/lose conditions, so the Game Over page renders instead of the default page, ending the game & allowing for retry

  - (a) Declare `isWinner` & `isLoser` variables

    - `isWinner` where having made at least one guess & last guess (`guesses.length - 1`) is equal to the answer

    - `isLoser` where the number of guesses is equal to 6 & guess does NOT match answer

  - (b) Set winning & losing CONDITIONAL renders, calling the codle `<Container>` & `<GameOver>` (*to be built*), with different messages depending on win or fail

  - (c) Create **NEW** `GameOver` component

    - Will pass in props of `answer`, `guesses` & the text (as `children` in the component)

    - This is a new page effectively, so we want it to display (i) the dynamic win/lose text, (ii) the correct answer as text, (iii) the board guesses made by the User **AND** (iv) New game button (*going back to `/codle` route*)

&nbsp;

### OTHER CONSIDERATIONS

You could take this as a baseline understanding, and develop it further to mimic the real thing, such as:

- Creating a true Board & Keyboard, instead of just the Board & rolling BoardGuesses (*see here for good tutorial: https://youtu.be/WDTNwmXUz2c*)

- Using an external API that can source words OR an API setup that holds accepted & non-accepted Words, allowing for validation (*see https://www.wordsapi.com/ OR `wordle.js` in `database`*)

- Link the codle `guesses` state to `localStorage`, so that the guesses persist across sessions and only clear on a new word being set every 24 hours

- Expanding the `CodleNav` to allow for game settings such as `Hard Mode`, different word databases or allowing for session game statistics (streaks, etc)

- Building in polish such as animations, cleaner UI or better refactored code

&nbsp;

**FOR ANY OF THESE** - Review this video first, as it is quite useful: https://youtu.be/WDTNwmXUz2c

&nbsp;

**I HAVE CREATED `/wordle` directory for you to have a play in, if you would like to go beyound `/codle`, without breaking it!**