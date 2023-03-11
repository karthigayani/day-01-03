### Day - 01 Nov -16

### Intro to React

1. JSX(JavaScript XML) -> JS (Webpack + babel) -> [Webpack is used to run babel. Babel converts JSX to JS]
2. Inside return() is JSX

### Why ClassName?

1. class is a reserved keyword in JS
2. for -> htmlFor in JSX
3. class -> className in JSX

{} -> template syntax (Supports expression)

### Day - 02 Nov -17

### Handy Shortcuts

1. ctrl + ` --> Show / hide terminal
2. ctrl + , --> Setting | Format on save
3. ctrl + C --> Stop react server in terminal (If not working means close the shell window)

   (If you want to start again means Open vs code -> File -> Open Folder -> Choose your project folder ->Terminal ->New Terminal -> wait until your project folder path shows in terminal -> type npm start-> wait until the terminal shows webpack compiled successfully -> you can see the spinning logo of react in your chrome page.)

   ( (ctrl + C)-> You can stop any running command by pressing Ctrl + C on your keyboard)

4. win + . --> emojis 5. ctrl + s --> Save

### Purpose of <noscript> tag in index.html :

- react app folder -> public -> index.html (inside you can see <noscript> tag).
- the content inside the noscript tag only display when you stop the javascript in your browser.

### why & who off the javascript?

- Refer notes in note.

### Why JavaScript is important in React App?

- Refer notes in note.

### Purpose of index.js

- Used to Bootstrap (start) the react project.
- In index.js you are instructing that the react project takes place in the id name "root".

- App component call
- <App /> component call syntax
- (You can call "n" no.of times -> Reusability)
- But Maintain Single main component and create "n" no.of sub components

- If you want to start measuring performance in your app, pass a function
- to log results (for example: reportWebVitals(console.log))
- or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

### React.StrictMode

- Used for Error finding purpose.
- It shows error in the form of warning messages.
- Displays error in console

### how function to be considered as components ?

1. function should start with a capital letter
2. It should return at least one jsx element

### How to customize a Component (function) ?

- We need argument(props) to customize a Component (function).

### props -> arguments/parameter

- props -> properties of the components
- props datatype object.(key value pair)
- So to access props you can go for .dot method or []box method.
  Eg:
  const double = (n) => n\*2
  double(10)
  20
  double(2)
  4
  double(50)
  100
- here (n)-> arguments/parameter

### <></> -> React fragment(empty container) to wrap the JSX elements

Or you can use div or section or anyother container tags to wrap the JSX elements

<></> -> React fragment Advantages:

- Avoiding extra elements
- Styling is easier from parent

if height width are same:

- you can use,
- aspect-ratio:1/1
- You have to mention any one value either height or width

### famous aspect ratios:

- 16/9 Youtube 16-width 9-height
- 4/3 old tv's
- 21/9 theatre(cinemas)

### DRY-Don't Repeat Yourself

- code Smell(DRY)
- we use mapping instead of loop
- Object destructuring

### where you use template literals?

- inside the return

/**\*\***\*\*\*\***\*\***\*\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***\*\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***\*\***\*\***\*\***\*\***\*\***\*\***\***\*\***\*\***\*\***\*\***\*\***\*\***\*\***/

### Day - 03 Nov -18

### Data transfering

- Can transfer daas from parent to child
- Not from child to parent.

### CI/CD - Continuous Integration(Github) and Continuous Deployment(Netlify)

- The process of automated deployment, making changes of the deployment and get the updated project in the same link is CI/CD

### AddEvent listener

- In JSX When you adding Event listener means you have to named using camelCase
- CamelCase -> CamelCase is a way to separate the words in a phrase by making the first letter of each word capitalized and not using spaces.
- e.g. iPhone, eBay

### Hooks

1. React listen to changes made by hooks
2. Hooks-function
3. It starts with `use`
4. `use` -> `useState`, `useEffect`, `useContext`, `useRef`,`useReducer`,`useCallback`,`useMemo`,`Custom Hooks`
   1. Syntax: `const [state, setState] = useState(InitialValue)`
   2. state -> state of mind | state of the art technology | current
   3. In React App -> _curreent data_ / _curreent value_
   4. `setState` updates the value of `state`
   5. `setState` react listens and updates `state` & view
   6. `import { useState} from "react";`
      - Flow: User clicks -> `onClick` function calls and trigger -> `setLike` -> React updates state & view

### imports & exports

- Types

  1.  named - imports & exports - preferred
      - Multiple exports
  2.  default - imports & exports
      - Only one default export per file

- Always put export at the end of the file - good practice.
- And import at the top of the file - good practice.
- Preferred - VS code Easy way to export & import method.

### Multiple exports:

- when you have multiple files to export from a same file means, don't put export behind every function, Complete all the functions(component) part . At the end of the page do like this : `export { Movies , Counter } ` type the component(function) name inside the {} separated by `commas ,`

### Multiple imports:

- when you have multiple files to import from a same file means, do like this at the top of the file `import { Movies , Counter} from "./Movies";` {}-inside the flower bracket mention component(function) name and inside `"" double` quotes mention file name.

### Examples:

- default import -> see index.js -> top `import App from './App';`
- default export -> see App.js -> bottom `export default App;`
- named import -> see App.js -> top `import { useState} from "react";`
- named export -> see Counter.js/Movie.js `export function Counter() {` | `export function Movie({ tle, descr, pstr, srtg }) {`

### Easy way to export & import:

- select the function you want to export -> you will see a yellow bulb -> click on the yellow bulb -> select move to new file -> your function will be moved to new file -> your function will be moved.
  -> vs code automatically named the file as in the name of your selected function (component name).
  -> vs code also put the import where you have called the component(function).
  -> vs also import the function as required(needed) in the exported function.

### Manual export & import:

- copy the function part -> Add file under src -> name the file -> paste the function -> type `export` before function with space like this `export function Counter() {` -> when you need data from some other file means -> first export that required file & then import it like this -> `import { Counter } from './Counter';`.

### Conditional Styling & Conditional rendering

- Syntax: `condition ? true : false`
- Ternary operation
