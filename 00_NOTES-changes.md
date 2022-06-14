# Nextjs: Bonus Content
## A. REORGANISATION OF INFORMATION ARCHITECTURE (SCALEABILITY)

With our baseline applications complete - we can look to reorganising the application's structuring to better improve future scaleability + offer different examples of how to structure Next.js/React.js projects

&nbsp;

### 1. COMPONENTS FOLDER ALIGNMENT WITH "OTHER CONVENTIONS"

During builds, it is natural to reorganise the application at points to better arrange the information & code for greater scaleability & clarity.  

**The following has been altered to target these issues:**

(i) All `components` files have been nested in "indexed" function directories

  - **ISSUE:** The growing `.js` & `.scss` files inside `components` was beginning to make even the sub-directories bloated and unclear

  - **SOLUTION:** As with React.js convention, we create functional directories, which nest all files related to it (*NEW Card folder holds Card.js, Card.module.scss & index.js*)

  - **ADDITIONAL:** To reduce breaking existing linking & allow for future scaling, an `index.js` root directory file is implemented bringing in all child files

&nbsp;

(ii) Restructured `components` directory

  - Three top level folders: `common`, `feature` & `layout`

  - All previous `ui` have been moved to `common` to suit best practices / convention

  - `news` and the **NEW** `game` & `complex` are now nested in the new `feature` directory

  - `layout` directory remains the same BUT `Layout.js` has been renamed to `index.js` to form off the layout folder

&nbsp;

(iii) Other Minor Changes

  - New `database` folder created, to house our `db.js` and **NEW** `codle.js` & `wordle.js`

  - Relative files have been re-linked, as many files, including `.scss` modules had been nested a level deeper, moved, etc.

&nbsp;

### 2. NEW "COMMON" UI TO REPLACE REPETITIVE CODE

In addition to updating IA of our project, some code is clearly being re-used, and this opportunity was taken to push some of these into the `common` UI:

- **NEW UI - Button:** The `anchor` tag nested inside the Next.js `Link` was being re-used on several occassions and needed styling to be marked to it, to render as a button not a link

  - The new reusable component takes several optional props & includes the `Link` component within it, to allow the `href` to be passed to the component

  - Styling can also now be adapted and adjusted for the new `Codle` section of the application

- **TRY TO THINK OF OTHER UI THAT COULD BE MADE REUSABLE!**