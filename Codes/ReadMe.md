# Episode - 4

# Episode - 5

## Learning in chapter - 5

### Part - 1

- Clean our code.
  - make a src folder put all compnent in seperate file.
  - make seprate folder/file for the utility.
    - constant, mockData

### Part - 2

- In this part make our app inteactive and use hook first time our app. also learn inport and export different ways.
- Add onclick event and intract.
- import ans export
- useState
  <br>

  # Episode - 6

## Detailed Mention of Topics and its Timestamps according to Namaste React Web Series

### Part - 1

- 00:02:00 – Monolith Architecture
- 00:05:00 – Microservices
- 00:07:00 – Separation of concerns
- 00:09:00 – UI Microservice

### Part - 2

- 00:17:50 – Explanation with diagram

### Part - 3

- 00:22:00 – useEffect()
- 00:31:00 – fetch(), Promise
- 00:32:00 – Inspect element, Swiggy Website
- 00:33:00 – React JS syntax, newer approach to handle fetch()
- 00:35:00 – CORS Policy
- 00:36:00 – CORS Chrome Extension
- 00:45:00 – Live Data API
- 00:47:00 – Delete MockData.js file
- 00:48:00 – Optional Chaining with an example

### Part - 4

- 00:50:40 – Spinning Loader(By using if condition)
- 00:52:40 – Shimmer UI
- 00:56:00 – Shimmer Component Code
- 00:58:30 – CSS Code for the Shimmer Component

### Part - 5

- 01:04:00 – Conditional Rendering
- 01:06:00 – using Ternary Operator
- 01:07:10 – Why do we need state variables? (useState)
- 01:16:10 – useState() usage & explanation
- 01:23:00 – Super Power of React
- 01:29:00 – Reconciliation & Diff Algorithm Explained
- 01:31:00 – Toggle the login & logout button

### Part -6

- 01:39:00 – Build a Search Functionality
- 01:46:00 – OnChange handler
- 01:55:00 – Nice explanation of re-rendering
- 01:57:00 – DOM Manipulation & Virtual DOM
- 02:02:00 – Search functionality enhanced using toLowerCase() and includes() method

### Part - 7

- 02:12:00 – Homework (Assignment), how to handle search if we search once so again how we search in all res
  cart.Ex- If 1st time i search kfc, on ui only kfc resturent card show, what if a agian search Domino's it throw
  error so we handle this problem by using a new searchRes state variable.

# Episode 07 – Finding the Path

## Detailed Mention of Topics and its Timestamps according to Namaste React Web Series

### Part - 1

- 00:03:00 – useEffect hook explanation, Dependency Array

### Part - 2

- 00:10:05 - Some impotant point about useState and hooks.

```JS
// Some rule for useState
  // 1. hook Never use outside the component.
  // 2. Try to put useState top of component.
  // 3. Never put useState inside loop, condition, function.
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // Some properties of useEffect
  // Case 1 -- Without dependecy Array useEffect call every render of component.
  // useEffect(() => {
  //   console.log("useEffect call each time when component render");
  // });

  // Case 2 -- With dependency Array -- useEffect call only once(first render)
  // useEffect(() => {
  //   console.log("useEffect call only fist render");
  // }, []);

  // Case 3 -- With dependency Array that have a dependency -- in this case useEffect call each time when that dependency change.
  useEffect(() => {
    console.log("useEffect call when dependency btnNameReact Change");
  }, [btnNameReact]);
```

### Part - 3

- 00:15:40 – React Router
- 00:19:00 – Create Routing Configuration
- 00:22:00 – Create About Component
- 00:30:00 – Rafce
- 00:33:00 – error (404 not found)
- 00:37:00 – useRouteError Hook
- 00:41:55 – Error.js

### Part - 4

- 00:44:20 – Children Routes
- 00:51:00 – Outlet Keyword
- 00:56:00 – Create links to Header Menu
- 00:58:18 – Link Component
- 01:00:00 – Observe the performance
- 01:03:55 – Single Page Applications (SPA)
- 01:05:35 – 2 types of Routing: Client Side Routing & Server-side Routing
- 01:08:00 – Session Recap till now

### Part - 5

- 01:11:50 – Dynamic Routing
- 01:13:35 – JSON Viewer
- 01:40:30 – GraphQL Introduction
- 01:52:40 – Dynamic Data coding
- 01:57:50 – Map function and its usage with a key
- 01:59:00 – Changing Restaurant ID’s
- 02:00:00 – New SuperPower Hook: UseParams
- 02:02:30 – Move API to constants.js
- 02:04:00 - Dynamic Cards- to be clickable
- 02:08:00 – Link Component
- 02:13:00 – Session Recap

# Episode 8 - Let's get Classy!

## Detailed Mention of Topics and its Timestamps according to Namaste React Web Series

### Part - 1

- 00:09:30 – Class based component example
- 00:16:00 – Props, Props in Function based component, Destructure
- 00:18:00 – How to write same example in a Class based component
- 00:21:00 – Mentioned about “Super(props)”
- 00:23:00 – What if you want more props?
  `Part 1 Completed`

### Part - 2

- 00:26:00 – How can we write local/state variables in a Function Component
- 00:28:00 – how can we create state/local variable in Class component
- 00:30:00 – “this.state” explained, Destructuring
- 00:34:00 – How do we create 2 state/local variables in both functional & class-based component
  `Part - 2 Completed`

### Part - 3

- 00:37:05 – How to update the state variables in Class component
  `Part - 3 Completed`

### Part - 4

- 00:47:55 – Interview Question
- 00:48:20 – Life cycle of Class based components
- 00:50:00 – Detailed Explanation
- Parent, child – Constructor
- Parent, child – Render
- 00:58:25 – ComponentDidMount(){ }, Life cycle of a Parent-child relationship
- 01:05:00 –ComponentDidMount() used for API calss
- 01:07:00 – API calls inside useEffect()
  `Part - 4 Completed`

### Part - 5

- 01:10:00 - What happent if we call mutiple child classComponent.
- 01:14:00 – this.props.name + “child constructor”
- 01:20:00 – React Lifecycle Methods Diagram
- 01:21:00 – Why React is so fast?
- 01:27:00 – DOM Manipulation
- 01:29:00 – Render phase, Commit phase
  `Part - 5 Completed`

### Part - 6

01:33:00 – How to make API calls in class based components?
01:36:00 – GitHub API call
01:38:40 – How to update the json data into our web page
01:43:38 – Coding UserClass.js component
01:44:00 – How life cycle works here in this code
01:45:00 - Debugger
01:49:30 – ComponentDidUpdate()
01:52:00 – Mounting Cycle
01:55:00 – API rate limit exceeded
01:56:15 – Unmounting Phase/cycle
`Part - 6 Completed`

### Part - 7

01:58:00 - in older days we were coding like this
02:09:00 – How to write the same in class based component – ProfileClass.js
02:15:00 – More Deeper we explore the old way of writing React Code
02:18:00 – what is the use case of componentWillUnmount()?
02:24:30 – Problem of Single Page Application
02:30:00 – Senior Developer should know this
02:32:00 – What will happen if we create setInterval inside useEffect
02:36:30 – coding Profile.js
02:45:30 – Async in useEffect()
