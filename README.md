**Date:** 02/10/25

# React 19 –  Roadmap

**Technologies Covered:**

* JavaScript
* TypeScript
* React (Basic to Advanced)
* Next.js
* React Native
* Testing & Deployment
* Redux
* End-to-End Project

---

## 1. What is React?

* **React** is a JavaScript library for building user interfaces.

| Version        | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| Up to 18       | React is a JavaScript library for building **Web UI**            |
| 18.x and above | React is a JavaScript library for building **Web and Native UI** |

---

## 2. What is the difference between React & Angular?

| Feature      | React                                    | Angular                                                                |
| ------------ | ---------------------------------------- | ---------------------------------------------------------------------- |
| Type         | Library                                  | Framework                                                              |
| Use Case     | Applications with complex backend stacks | Applications where frontend needs strong control over application flow |
| Architecture | 30% Frontend / 70% Backend               | 70% Frontend / 30% Backend                                             |

---

## 3. What is the difference between React & React JS?

* **Both are the same.**
* Modern term used: **React**

---

## 4. Why do we need technologies like React and Angular in modern web UI?

To build:

* **SPA** – Single Page Applications
* **PWA** – Progressive Web Applications

Limitations of traditional JavaScript/jQuery:

* Excessive **DOM manipulations**
* Too much **boilerplate coding**
* Poor **code reusability** and **extensibility**
* Weak **code-level security**
* Too many **explicit Ajax calls**

---

## 5. Challenges in Modern Web Development

### 🔄 Unified UX

* Consistent experience across all devices (desktop, tablet, mobile)
* Mobile users should access all features

### 🌊 Fluid UX

* Users interact with the application from a single page
* New content loads **without reloading the page**

### 🔌 Loosely Coupled & Extensible Systems

* Add new features **without breaking existing ones**
* Modular architecture for **lightweight, pluggable features**

> ✅ **Solution:** Build a **SPA (Single Page Application)**

---

## React Features

```todo: React Features ```

* Declarative UI
* Component-Based Architecture
* Virtual DOM
* One-Way Data Binding
* JSX – JavaScript XML
* Hooks API
* Concurrent Mode (from React 18+)
* Server Components (React 19+)
* Improved Developer Tooling
* Ecosystem support (Next.js, Redux, etc.)

---

**Date:** 03/10/25

# React in Existing Web Application

## 1. Create a New Web Application and Setup Development Environment

- Create a new folder for the application:
  
  ```
  D:\web-app
  ```

- Open the folder in **VS Code**.
- Open the terminal inside the project location and run the command:

  ```bash
  npm init -y
  ```

  - This generates a `package.json` file.  
  - `package.json` contains project metadata such as commands, version, license, dependencies, etc.

- Manually add the following files and folders into the project:

  | File/Folder        | Description                                                       |
  |--------------------|-------------------------------------------------------------------|
  | `README.md`        | Help document for developers, created by developers.             |
  | `.gitignore`       | Configures files/folders to ignore when publishing to Git.       |
  | `public` (folder)  | Contains static resources like HTML, images, documents, etc.     |
  | `src` (folder)     | Contains dynamic resources like CSS, SCSS, JS, TS, JSX, TSX files.|
  | `index.html`       | Startup page of the application.                                 |

- Click **Go Live** in VS Code status bar to start the application.

***

## 2. Add a New Webpage

- Add a new page named `home.html` inside the `public` folder.

***

## 3. Add `<noscript>` Element

- Add the HTML `<noscript>` element to check if JavaScript is enabled in the browser.

```html
<noscript>
  JavaScript is disabled in your browser.
</noscript>
```

***

## 4. Add Container to Actual DOM with `id="root"`

- Container to render the React Virtual DOM elements:

```html
<div id="root"></div>
```

***

## 5. Setup React Libraries Using CDN

### Required Libraries

- `react` : Core React library.
- `react-dom` : For creating and managing Virtual DOM.
- `babel` : JavaScript compiler.

### Note:

- CDN support is available for React up to version 18 only.  
- React 19 and above disable CDN integration.

### React 18 CDN Links

Add these inside the HTML `<head>` or before your script:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

### Babel CDN

- Visit [https://babeljs.io](https://babeljs.io) → Docs → Integration Package → `babel/standalone`
- Copy the standalone CDN and add it below React scripts:

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

***

## 6. Create `<script>` Element to Render Virtual DOM

### React up to Version 17

```html
<script type="text/babel">
  ReactDOM.render("message or component", document.getElementById("root"));
</script>
```

### React 18 & 19

```html
<script type="text/babel">
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render("Welcome");
</script>
```

---
**Date:** 04/10/25

# React 18+ Essentials - Setup, JSX, and Components

## React Versions

| Version    | Rendering Syntax                         |
| ---------- | ---------------------------------------- |
| React ≤ 17 | `ReactDOM.render("component", "target")` |
| React ≤ 17 | `const root = createRoot(“target”)`      |
|            | `root.render(“component”);`              | 
|                                                       |
```js
const root = ReactDOM.createRoot(document.getElementById("target"));
root.render("component");
```

---

## Setup React library for project:

### 1. Install Required Libraries

```bash
npm install react@18 react-dom@18 @babel/standalone --save
```

* All dependencies are copied into the `node_modules` folder.

---

### 2. Link React and Babel in Your HTML

```html
<script src="../node_modules/react/umd/react.development.js"></script>
<script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
<script src="../node_modules/@babel/standalone/babel.js"></script>
```

---

### 3. Example: Basic React App (`home.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Home</title>

  <!-- React and Babel Scripts -->
  <script src="../node_modules/react/umd/react.development.js"></script>
  <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
  <script src="../node_modules/@babel/standalone/babel.js"></script>

  <script type="text/babel">
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render("Welcome to React 18x");
  </script>
</head>
<body>
  <noscript>Please enable JavaScript in your browser</noscript>
  <h1>Home</h1>
  <div id="root"></div>
</body>
</html>
```

---

## React Components

* Components are the **building blocks** of a React application.
* Each component consists of:

  * `a) Presentation` – HTML
  * `b) Styles` – CSS
  * `c) Logic` – JSX / TSX

### ✅ Benefits:

* **Reusability**
* **Extensibility**
* **Testability**

---

### 🧱 Creating Components

React supports **Class** and **Function** components.

> ⚠️ Class components are still supported, but **Function components** with Hooks are recommended.

---

### 1. Function Components

Two ways to define a function component:

#### a) Declaration (supports hoisting)

```js
function Login() {
  return <h1>Login</h1>;
}
```

#### b) Expression (no hoisting)

```js
const Login = function () {
  return <h1>Login</h1>;
}
```

---

### 2. Component Rules

| Rule                                                 | Description            |
| ---------------------------------------------------- | ---------------------- |
| ✅ Must return a JSX element                          | JSX = JavaScript + XML |
| ✅ Name must start with **Uppercase**                 |                        |
| ✅ Must return **only one parent element (fragment)** |                        |
| ✅ All JSX tags must be **closed**                    |                        |
| ✅ Use `className` instead of `class` in JSX          |                        |

---

### ❌ Invalid JSX Example:

```js
function Login() {
  return (
    <h1>Login</h1>
    <p>User Login</p>
  ); // ❌ Multiple root elements not allowed
}
```

---

### ✅ Valid JSX Example:

```js
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <p>User Login</p>
    </div>
  );
}
```

---

### 📝 JSX Attributes

| Incorrect                   | Correct                         |
| --------------------------- | ------------------------------- |
| `<img class="img-fluid" />` | `<img className="img-fluid" />` |

---

## ✅ Complete React + JSX Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Home</title>

  <style>
    nav {
      border: 1px solid black;
      padding: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: black;
      color: white;
    }
    nav span {
      margin-right: 20px;
    }
  </style>

  <script src="../node_modules/react/umd/react.development.js"></script>
  <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
  <script src="../node_modules/@babel/standalone/babel.js"></script>

  <script type="text/babel">
    function Login() {
      return (
        <form>
          <h3>User Login</h3>
          <dl>
            <dt>User Name</dt>
            <dd><input type="text" /></dd>
            <dt>Password</dt>
            <dd><input type="password" /></dd>
          </dl>
          <button>Login</button>
        </form>
      );
    }

    function Navbar() {
      return (
        <nav>
          <div><span>Shopping</span></div>
          <div>
            <span>Home</span>
            <span>Shop</span>
            <span>Pages</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
        </nav>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <section>
        <Navbar />
        <Login />
      </section>
    );
  </script>
</head>
<body>
  <noscript>Please enable JavaScript in your browser</noscript>
  <div id="root"></div>
</body>
</html>
```

---
**Date:** 05/10/25
---

# ✅ Bootstrap Setup + JSX Styling + Netflix UI with React

---

## 🚀 Setting Up Bootstrap for Web Application

### 1. Install Bootstrap and Icons

```bash
npm install bootstrap bootstrap-icons --save
```

---

### 2. Link Bootstrap in Your HTML

```html
<!-- Bootstrap Icons -->
<link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">

<!-- Bootstrap JS (includes Popper) -->
<script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
```

> ✅ **Note:** Bootstrap 5+ doesn’t require `jQuery` explicitly.

---

### 🔗 Useful Resources

* [Icons Library](https://icons.getbootstrap.com)
* [Bootstrap Documentation](https://getbootstrap.com/docs)

---

## 🧪 Example: Home.html with Bootstrap + React

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
  <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
  <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>

  <!-- React -->
  <script src="../node_modules/react/umd/react.development.js"></script>
  <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
  <script src="../node_modules/@babel/standalone/babel.js"></script>

  <!-- Custom Styles -->
  <style>
    nav {
      border: 1px solid black;
      padding: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: black;
      color: white;
    }

    nav span {
      margin-right: 20px;
    }
  </style>

  <script type="text/babel">

    function Login() {
      return (
        <div className="d-flex justify-content-center mt-5">
          <form className="border border-1 alert alert-warning alert-dismissible border-secondary p-4">
            <h3 className="bi bi-person-circle"> User Login</h3>
            <button data-bs-dismiss="alert" className="btn btn-close"></button>
            <dl>
              <dt>User Name</dt>
              <dd><input type="text" className="form-control" /></dd>
              <dt>Password</dt>
              <dd><input type="password" className="form-control" /></dd>
            </dl>
            <button className="btn btn-warning w-100">Login</button>
          </form>
        </div>
      );
    }

    function Navbar() {
      return (
        <nav>
          <div><span>Shopping</span></div>
          <div>
            <span>Home</span>
            <span>Shop</span>
            <span>Pages</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
        </nav>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <section>
        <Navbar />
        <Login />
      </section>
    );

  </script>
</head>
<body>
  <noscript>Please enable JavaScript on your browser</noscript>
  <div id="root"></div>
</body>
</html>
```

---

## 🎨 JSX Inline Styles

* Inline styles in JSX are applied using the `style` attribute with a **style object**.

### 🔧 Syntax:

```jsx
<div style={{ key: "value", key2: "value2" }}>
```

### ⚠️ CamelCase Required for Style Keys:

| CSS Attribute      | JSX Attribute     |
| ------------------ | ----------------- |
| `background-color` | `backgroundColor` |
| `text-align`       | `textAlign`       |
| `font-size`        | `fontSize`        |
| `color`            | `color`           |

### ✅ Example:

```jsx
<div style={{ backgroundColor: "red", color: "white", width: "200px" }}>
  Welcome!
</div>
```

---

## 🎬 Netflix Clone Example with React & Bootstrap

### 📁 `Netflix.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Netflix - Movies Online</title>

  <!-- Page Styles -->
  <style>
    body {
      background-image: url("./images/Netflix-Background.jpg");
      background-size: cover;
      height: 100vh;
    }

    .shade {
      background-color: rgba(0, 0, 0, 0.6);
      height: 100vh;
    }

    .brand-title {
      font-size: 50px;
      font-family: Arial;
      font-weight: bold;
      color: red;
      text-shadow: 1px 1px 1px white;
    }

    .section-title {
      font-family: Arial;
      font-size: 50px;
      font-weight: bold;
    }

    section {
      padding-top: 80px;
    }

    .section-subtitle {
      font-size: 20px;
    }
  </style>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
  <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
  <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>

  <!-- React -->
  <script src="../node_modules/react/umd/react.development.js"></script>
  <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
  <script src="../node_modules/@babel/standalone/babel.js"></script>

  <script type="text/babel">

    function NetflixIndex() {
      return (
        <div className="shade">
          <NetflixHeader />
          <NetflixSection />
        </div>
      );
    }

    function NetflixHeader() {
      return (
        <header className="p-4 d-flex align-items-center justify-content-between">
          <div className="brand-title">NETFLIX</div>
          <div>
            <div className="d-flex">
              <div className="input-group">
                <span className="bi input-group-text bi-translate"></span>
                <select className="form-select">
                  <option>Language</option>
                </select>
              </div>
              <button data-bs-toggle="modal" data-bs-target="#login" className="btn mx-3 btn-danger">
                Signin
              </button>

              <div className="modal fade" id="login">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3>User Login</h3>
                      <button className="btn btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                      <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" className="form-control" /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control" /></dd>
                      </dl>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-warning">Login</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </header>
      );
    }

    function NetflixSection() {
      return (
        <section className="text-white text-center">
          <div className="section-title">
            Unlimited movies, TV <br /> shows and more
          </div>
          <div className="section-subtitle">
            Starts at ₹149. Cancel at any time.
          </div>
          <NetflixMain />
        </section>
      );
    }

    function NetflixMain() {
      return (
        <main className="mt-5">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="d-flex justify-content-center">
            <div>
              <div className="input-group input-group-lg">
                <input type="email" className="form-control" placeholder="Your email address" />
                <button className="btn mx-2 btn-danger">
                  Get Started <span className="bi bi-chevron-right"></span>
                </button>
              </div>
            </div>
          </div>
        </main>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<NetflixIndex />);

  </script>
</head>
<body>
  <noscript>Please enable JavaScript in your browser</noscript>
  <div id="root"></div>
</body>
</html>
```

---

**Date:** 08/10/25

# React SPA (Single Page Application)

### Setup Steps

1. Open any location of your PC in **Command Prompt / Terminal**.
2. You can create a React application using various bundling tools:  
   - Webpack  
   - Parcel  
   - Vite  

   These tools scaffold and create a project environment according to developer requirements.

3. Run the following command in the terminal:

```bash
D:\> npm create vite@latest app_name -- --template react
```

- **Framework**: React  
- **Variant**: JavaScript  

4. A folder named **app_name** will be created.  
5. Open the folder in **Visual Studio Code**.  
6. Open the terminal inside the project folder location.  
7. Run the command:

```bash
npm install
```

This will install all dependencies required for the React project.

***

### Project Structure

| File / Folder         | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **node_modules**       | All library files installed using NPM.                                     |
| **public**             | Static resources (HTML, images, docs, videos, JSON).                       |
| **src**                | Dynamic resources (.js, .jsx, .ts, .tsx, .css, .scss, etc.).               |
| **.gitignore**         | Folders/files to ignore while publishing to Git.                           |
| **eslint.config.js**   | JavaScript analysis tool; rules can be set for the project.                 |
| **index.html**         | Startup page of the application.                                           |
| **package.json**       | Contains all dependencies installed for the project.                       |
| **package-lock.json**  | Contains project metadata.                                                  |
| **README.md**          | Help document for developers by developers.                               |
| **vite.config.js**     | Bundler configuration (plugins, testing frameworks, compilers, etc.).      |

***

### Run React Project

1. Open terminal in project location.  
2. Run the command:

```bash
npm run dev
```

3. This starts your project on a local server in **development environment**.  
4. Open the following in any browser:

```
http://localhost:5173
```

***

### React Project Flow

1. Client requests the application from browser at `localhost:5173`.  
2. Application loads **index.html** and renders static DOM into the browser.  

   *Note*: Browser loads any web page using the `DOMContentLoaded` event.  

3. Index page loads **main.jsx** from `src` folder:  
   - Imports React and ReactDOM libraries.  
   - Imports `App` component from `app.jsx`.  
   - Creates a Virtual DOM using `createRoot`.  
   - Renders `App` component into Virtual DOM.  

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

4. **App Component** is the default component provided by React application (`src/app.jsx`):

```jsx
function App() {
  return (
    <div> </div>
  );
}
```

---
**Date:** 09/10/25


# Components in React SPA Environment

### Key Points
- React uses **JavaScript module system** for components.  
- A modular approach allows creating application-specific libraries.  
- Benefits: *reusability, extensibility, separation, testability*.  
- Makes application lightweight and faster.  

***

### JavaScript Modules

- Every JS file is considered as a **module**.  
- A module can have variables, functions, and classes.  
- To use module contents externally, you need **export** and **import**.  

#### Export Syntax
```javascript
export function Name() { }
export const variable = function() { }
export class Name { }
```

- Default export:
```javascript
function Name() { }
export default Name;
```

**Note:** Every module can have only one default export.  

#### Import Syntax
```javascript
import { Name } from "module_name";       // Named export
import Name from "module_name";           // Default export
```

- Alias usage for ambiguity:
```javascript
import { actual as alias } from "module_name";
```

- Import all members using wildcard:
```javascript
import * as library from "module_name";

library.f1()
library.f2()
```

***

### Component File Structure

1. All component files must be in **src** folder.  
2. Every component can have **3 files**:  
   - `.jsx` → Markup and logic  
   - `.css` → Styles  
   - `.test.js` / `.spec.js` → Unit tests  

3. Suggested folder structure:  

```
src
└── components
    └── login
        ├── login.jsx
        ├── login.css
        └── login.test.js
```

***

### Creating Components

Every component is a function or class, requiring export.  

**Option 1: Named function export**
```jsx
export function Login() {
  return (
    <div> </div>
  )
}
```

**Option 2: Function expression with default export**
```jsx
const Login = function() {
  return (
    <div> </div>
  )
}
export default Login;
```

**Option 3: Arrow function with default export**
```jsx
const Login = () => (<div> </div>);
export default Login;
```

***

### Importing into `main.jsx`

```jsx
import { Login } from "./components/login/login";

<StrictMode>
  <Login />
</StrictMode>
```

*Note*: Remove `app.jsx` and `index.css` from `main.jsx` when replacing with Login component.

***

### Running the Application

```bash
npm run dev
```

***

### Styling Components

- Keep styles in a separate `login.css`.  
- Avoid using **type selectors**. Always use **class** or **id**.  
- Import CSS in the component:  

```jsx
import "./login.css";
```

- Use `className` property for CSS classes.

***

### Adding Bootstrap

1. Install Bootstrap and Bootstrap Icons:
```bash
npm install bootstrap bootstrap-icons --save
```

2. Import into **main.jsx**:
```jsx
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
```

***

### Example CSS (`login.css`)
```css
.login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.form-style {
    border: 1px solid gray;
    padding: 20px;
    box-shadow: 2px 2px 2px black;
    border-radius: 10px;
}
```

***

### Example Component (`login.jsx`)
```jsx
import "./login.css";

export function Login() {
    return (
        <div className="login-form">
            <form className="form-style alert alert-dismissible alert-warning">
                <h2 className="bi bi-person-circle"> User Login</h2>
                <button className="btn btn-close" data-bs-dismiss="alert"></button>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className="btn btn-warning w-100">Login</button>
            </form>
        </div>
    )
}
```

***

### Example Main File (`main.jsx`)
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from './components/login/login';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
```
---
**Date:** 10/10/25


# Data Binding in React

### What is Data Binding?
- A technique of accessing data from a source and updating it to the UI.  
- Also the process of identifying changes in the UI and updating them back to the source.  
- Two types:  
  - **One-Way Binding**  
  - **Two-Way Binding**  

- React implicitly supports **One-Way Binding**.  
- One-Way Binding is more secure and faster, but not ideal for updates from the UI.  
- Data is bound with UI elements using a **binding expression `{ }`**.  

#### Example
```javascript
var username = "John";

<p>Hello! { username }</p>
<input type="text" value={username} />
```

**Note:**  
- Don’t use plain variables in components for storing data.  
- Variables are immutable, but components need a *mutable* data structure.  
- Always use **State** for handling data in a component.  

***

### FAQ: What is State and Why Do We Need It?

- Web uses **HTTP** as protocol.  
- HTTP is **stateless** and cannot remember data between requests.  
- Hence, various **state management** techniques are required to store and use data across requests.  

***

### State in React Components

- Every React function component has its own **state** when created.  
- State can store **primitive** and **non-primitive** data types.  
- You can access state using the **useState() hook**.  
- Hooks are functions provided by React as services.  

#### Syntax
```javascript
const [getter, setter] = useState(any_value);
```

- **Getter:** Reads and returns a value.  
- **Setter:** Assigns a new value.  

#### Example
```javascript
const [uname, setUname] = useState("John");

<p>{uname}</p>
```

***

### FAQs on State

1. **Why use `const` for state and not `var` or `let`?**  
   - State must be initialized and used correctly.  
   - `var` and `let` allow skipping initialization, hence not recommended.  

2. **If state is declared with `const`, how do we update it?**  
   - By **re-initializing memory** using the setter function.  

   ```javascript
   const [uname, setUname] = useState("John");

   setUname = "David";   // Invalid - assignment not allowed
   setUname("David");    // Valid - assigns new value
   ```

3. **When to set state?**  
   - On component **mount** or on specific **events**.  

4. **What is mount?**  
   - A component phase describing when a component is **loaded**.  
   - Flow:  
     ``` 
     Client → Request → Component → App Creates Component → Mounts Component
     ```

5. **How to configure mount?**  
   - Using the **useEffect() hook**.  

   ```javascript
   useEffect(() => {
      // execute on mount
   }, [dependencies]);
   ```

   - A component mounts **only once after creation**.  
   - If dependencies are provided, it mounts again when those dependencies change.  

***

### Example: Data Binding with State

**data-binding.jsx**
```jsx
import { useEffect, useState } from "react";

export function DataBinding() {
    const [uname, setUname] = useState("David");
    const [email, setEmail] = useState("eg:some@gmail.com");

    useEffect(() => {
        setUname("John");
        setEmail("david_123@outlook.com");
    }, []);

    return (
        <div className="container p-4">
            <h2>Data Binding</h2>
            <p>Hello! {uname}</p>
            <p>Your email {email}</p>
        </div>
    );
}
```
---

**Date:** 11/10/25

# Handling Various Data Types in React


## 1. Handling Numbers

Numbers in React state behave similarly to JavaScript numbers.

**Examples of number types:**
- Signed integer: `10`  
- Unsigned integer: `10`  
- Floating point: `23.21`  
- Double: `234.452`  
- Decimal: `2100.452`  
- Binary: `0b1010`  
- Hexadecimal: `0x0101`  
- Octal: `0o745`  
- BigInt: `93888111123n`  
- Exponential: `2e3`  

**Common methods:**  
- `toFixed()`  
- `toPrecision()`  
- `toLocaleString()`  

#### Example
```jsx
const [price] = useState(45000.30);

<p>{ price.toFixed(2) }</p>        // 45000.30 with 2 decimal places
<p>{ price.toPrecision(6) }</p>   // Precision with 6 digits
```

***

### `toLocaleString()` in Numbers

Formats numbers with regional notations and styles.

```jsx
{ price.toLocaleString('en-IN') }
{ price.toLocaleString('en-IN', { style: "currency", currency: "INR" }) }
```

Other styles:  
- currency  
- percentage  
- unit  
- decimal  

```jsx
const [rate] = useState(0.567);
{ rate.toLocaleString('en-IN', { style: "percent" }) }

const [weight] = useState(75);
{ weight.toLocaleString('en-IN', { style: "unit", unit: "kilogram" }) }
```

**Notations:**  
- compact  
- scientific  
- engineering  

```jsx
const [views] = useState(4500000);
{ views.toLocaleString("en-IN", { notation: "compact" }) }
```

***

### Number Utilities
- **Parsing:**
```javascript
parseInt("230")   // 230
parseFloat("23.56") // 23.56
```

- **Verification:**
```javascript
isNaN("abc") // true
```

- **Fractional Digits example:**
```jsx
const [price] = useState(74900);
{ price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }
```

***

## 2. Handling Boolean

- JavaScript Boolean values: `true`, `false`.  
- React can’t directly display booleans, so convert them to strings or JSX conditions.  

```jsx
const [stock] = useState(true);

<p>{ stock === true ? "true" : "false" }</p>
```

**Note:** JSX does not allow statements inside `{ }`, only expressions.

***

## 3. Handling Strings

- Defined using:  
  - Double quotes `" "`  
  - Single quotes `' '`  
  - Backticks `` ` ` ``  

- Backticks allow **JavaScript string binding expression `${ }`**.  
- React binding uses **`{ }`**.  

#### Example
```jsx
const [errorClass] = useState("text-danger");

// Traditional string concatenation
<p className={"border border-1 " + errorClass}>Text</p>

// ES6 template string
<p className={`border border-1 ${errorClass}`}>Text</p>
```

### Common String Methods
- `toUpperCase()` / `toLowerCase()`  
- `startsWith()` / `endsWith()`  
- `length`  
- `slice()` / `substring()` / `substr()`  
- `replace()` / `replaceAll()`  
- `match()` / `includes()`  
- `charAt()` / `charCodeAt()`  
- `indexOf()` / `lastIndexOf()`  
- `trim()` / `trimStart()` / `trimEnd()`  

***

## 4. Null and Undefined

- Same as JavaScript → `null`, `undefined`.  
- Used for uninitialized or absent values.  

***
**Date:** 12/10/25



## 5. Arrays and Objects


### Array Type

- Array configuration is the same as in JavaScript.
- Array methods also behave identically.

### Syntax for Array Configuration
```js
var values = [];
var values = new Array();
```

### Common Array Manipulation Methods
- `push()`, `pop()`, `shift()`, `splice()`, `unshift()`, `map()`, `forEach()`, `find()`, `filter()`, etc.

### Reading Elements in React
React recommends using the `map()` method, a JavaScript array method optimized for reading elements asynchronously.

```jsx
collection.map(function(value, index) { 
  // your code
});
```

Or with React state:

```jsx
const [collection] = useState([]);

<ol>
  {
    collection.map((value, index) => <li key={index}>{value}</li>)
  }
</ol>
```

### Keys in Lists

- Every repeating element must have a **unique key**, specified via the `key` property.

```jsx
<li key={index}>{value}</li>
<li key={value}>{value}</li>  // only if `value` is guaranteed unique
```

- Keys uniquely identify elements for operations like edit, read, and delete.

### Updating Arrays in State

- Arrays cannot be mutated directly; use setter functions.
- Setter can reinitialize array or push, unshift, splice new values immutably.

```js
const [collection, setCollection] = useState([]);

setCollection([newValue]);
setCollection(prev => [...prev, newValue]); // recommended

// Incorrect — do NOT do this:
setCollection.push(newValue);
```

***

### Example: Array Binding (`data-binding.jsx`)

```jsx
import { useState } from "react";

export function DataBinding() {
    const [categories] = useState(['All', 'Electronics', 'Fashion', 'Footwear']);

    return (
        <div className="container p-4">
            <h2>Array</h2>
            <nav>
                {categories.map(category =>
                    <button className="btn mx-4 btn-warning" key={category}>
                        {category}
                    </button>
                )}
            </nav>
            <ol>
                {categories.map((category, index) =>
                    <li key={index}>{category}</li>
                )}
            </ol>
            <select>
                {categories.map(category =>
                    <option key={category}>{category}</option>
                )}
            </select>
            <ul className="list-unstyled">
                {categories.map(category =>
                    <li key={category}>
                        <input type="checkbox" />
                        <label>{category}</label>
                    </li>
                )}
            </ul>
        </div>
    );
}
```

***

  ## Object Type

- Concept of objects introduced by Alan Kay in the 1960s.
- Johan Nygaard and Ole-Johan Dahl developed OOP; SIMULA 67 was the first OOP language.
- Objects keep related data and logic together.
- Trygve Reenskaug designed the MVC pattern for code separation.
- In JavaScript, objects are collections of key-value pairs.
- Keys are strings, and values can be any type.

### Syntax for Objects

```js
{
  key: value,
  key2: value2
}
```

- Access object properties using the dot operator:

```js
const [obj] = useState({ key: value });

{obj.key}
```

- Common object operations in JavaScript:

  - `Object.keys(object)` — returns all keys.
  - `delete object.key` — removes a key.
  - `key in object` — verifies if key exists.

### Example: Accessing Object Keys in JSX

```jsx
Object.keys(object_name).map(key =>
  <li key={key}>{key}</li>
);
```

***

### Example: Object Binding and Nested Data (`data-binding.jsx`)

```jsx
import { useState } from "react";

export function DataBinding() {
    const [product] = useState({
        Name: 'Samsung TV',
        Price: 45000,
        ShippedTo: ['Delhi', 'Hyd'],
        Rating: { Rate: 4.3, Count: 600 }
    });

    return (
        <div className="container p-4">
            <h3>Products Table</h3>
            <table className="table bg-dark text-white">
                <thead>
                    {Object.keys(product).map(key =>
                        <th key={key}>{key}</th>
                    )}
                </thead>
            </table>

            <h3>Product Details</h3>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}</dd>
                <dt>Shipped To</dt>
                <dd>
                    <ul>
                        {product.ShippedTo.map(city => <li key={city}>{city}</li>)}
                    </ul>
                </dd>
                <dt>Ratings</dt>
                <dd>
                    <span className="badge bg-success rounded p-2">
                        {product.Rating.Rate} <span className="bi bi-star-fill"></span>
                    </span>
                    <span className="fw-bold text-secondary">{product.Rating.Count} ratings</span>
                </dd>
            </dl>
        </div>
    );
}
```

***

### Example: Array of Objects Binding

```jsx
import { useState } from "react";

export function DataBinding() {
    const [products] = useState([
        { Name: 'Samsung TV', Price: 45000 },
        { Name: 'Mobile', Price: 24000 },
        { Name: 'Watch', Price: 13000 }
    ]);

    return (
        <div className="container p-4">
            <h2>Product Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.Name}>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
```


**Date:** 15/10/25



# Date Type in React

Date and Time values can be handled using the JavaScript `Date()` constructor.  
It allows loading the default system date or any specific date into memory.

**Syntax:**
```js
const [ today ] = useState(new Date('year-month-day hrs:min:sec.milliSec'));
```

All **date methods** are the same as in JavaScript:
- `getHours()`    `setHours()`
- `getMinutes()`   `setMinutes()`
- `getSeconds()`   `setSeconds()`
- `getMilliseconds()` `setMilliseconds()`
- `getDay()`     `setDate()`
- `getDate()`     `setMonth()`
- `getMonth()`     `setYear()`
- `getFullYear()`
- `toLocaleDateString()`
- `toDateString()`
- `toLocaleTimeString()`
- `toTimeString()`

**Example (`data-binding.jsx`):**
```js
import { useEffect, useState } from "react";

export function DataBinding() {
  const [today, setToday] = useState(new Date('2025-09-17'));
  return (
    <div className="container p-4">
      <h2>Data Binding</h2>
      <p>{today.toDateString()}</p>
    </div>
  );
}
```

***

## JavaScript Date Libraries in React

React supports popular JS date/time libraries, including:

- **moment**
- **dayjs**
- **luxon**

### Setting up Moment in React

1. **Install moment:**
   ```sh
   npm install moment --save
   ```

2. **Import moment:**
   ```js
   import moment from "moment";
   ```

3. **Format dates with moment:**
   ```js
   const [today] = useState(new Date());
   { moment(today).format('dddd DD, MMMM YYYY') }
   ```

#### Format Tokens:
- `ddd` short weekday name
- `dddd` long weekday name
- `DD`  date number
- `MM`  month number
- `MMM` short month name
- `MMMM` long month name
- `YY`  short year
- `YYYY` long year

Refer to [momentjs.com](https://momentjs.com/) for more format options.

### Example Using moment
```js
import { useEffect, useState } from "react";
import moment from "moment";

export function DataBinding() {
  const [today, setToday] = useState(new Date('2025-09-17'));
  return (
    <div className="container p-4">
      <h2>Data Binding</h2>
      <p>{moment(today).format('dddd DD, MMMM YYYY')}</p>
    </div>
  );
}
```

***

# Regular Expression in React

A **regular expression** (regex) is a set of meta characters and quantifiers, enclosed in `/ /`.  
It is used with the String `match()` method for validation.

**Syntax:**
```js
const [ pattern ] = useState( /your_expression/ );

// Usage:
{ (string.match(pattern)) ? True : False }
```

### Example: Validate Indian Mobile Number

```js
import { useEffect, useState } from "react";
import moment from "moment";

export function DataBinding() {
  const [pattern] = useState(/\+91\d{10}/);
  const [mobile] = useState('+919876543210');
  return (
    <div className="container p-4">
      <h2>Data Binding</h2>
      <p>{(mobile.match(pattern)) ? "Verified" : "Invalid Mobile"}</p>
    </div>
  );
}
```

***



# Fetching Data from JSON File

JavaScript’s **XMLHttpRequest** object enables AJAX calls from the browser.

## About XMLHttpRequest
- JavaScript object for AJAX requests.
- Synchronous by default; must be configured for async.
- Returns data in XML or Text format.
- Explicit conversion required for other types (e.g., JSON).
- Not recommended due to security (XSS, XSRF, CORS) and error handling issues.

### XMLHttpRequest Phases
- 1 Initial
- 2 Success
- 3 Complete
- 4 Ready

### Basic Flow

```js
var http = new XMLHttpRequest();
http.open("method", "url", asyncBoolean);
http.send();

http.onreadystatechange = function() {
  if (http.readyState === 4) {
    // handle response
    http.responseText
  }
}
```

#### Example Product Data (`public/product.json`):
```json
{
  "title": "Apple iPhone 16 (Pink, 256 GB)",
  "price": 71999,
  "image": "iphone-pink.png",
  "rating": { "rate":4.9, "ratings":19106, "reviews":793 },
  "offers": [
    "Bank Offer10% Off on Supermoney UPI. Max discount of ₹50. Minimum order value of ₹250.T&C",
    "Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C",
    "Bank Offer5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarterT&C",
    "Special PriceGet extra ₹27901 off (price inclusive of cashback/coupon)T&C"
  ] 
}
```

### Example: Fetch and Display JSON (`components/flipkart.jsx`)

```js
import { useEffect, useState } from "react";

export function Flipkart() {
  const [product, setProduct] = useState({
    title: null,
    price: 0,
    image: null,
    rating: { rate: 0, ratings: 0, reviews: 0 },
    offers: []
  });

  function LoadProduct() {
    var http = new XMLHttpRequest();
    http.open("get", "product.json", true);
    http.send();
    http.onreadystatechange = function() {
      if (http.readyState === 4) {
        setProduct(JSON.parse(http.responseText));
      }
    }
  }

  useEffect(() => {
    LoadProduct();
  }, []);

  return (
    <div>
      <div className="row mt-4">
        <div className="col-3">
          <img src={product.image} width="100%" />
        </div>
        <div className="col-9">
          <div className="fs-5">{product.title}</div>
          <div className="mt-2">
            <span className="badge bg-success text-white rounded">
              {product.rating.rate} <span className="bi bi-star-fill"></span>
            </span>
            <span className="mx-2 fw-bold text-secondary">
              {product.rating.ratings.toLocaleString('en-in')} ratings & {product.rating.reviews} reviews
            </span>
          </div>
          <div className="my-2 fs-1 fw-bold">
            {product.price.toLocaleString('en', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
          </div>
          <div className="mt-4">
            <h6>Available Offers</h6>
            <ul className="list-unstyled">
              {
                product.offers.map(offer =>
                  <li className="bi bi-tag-fill text-success my-3" key={offer}>
                    <span className="text-secondary"> {offer} </span>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
```
----

**Date**:16/10/2025


# AJAX in React – Fetch vs Axios

## XMLHttpRequest & JSON

- **XMLHttpRequest** → Older way of AJAX in JavaScript.  
- **JSON** → Format used for structured data exchange.  

---

## Fetch API & Promise  

- `fetch()` is a **JavaScript Promise**.  
- Promise is an **asynchronous function**.  
- Promise uses 3 callbacks:  
  - `then()` → on success  
  - `catch()` → on failure  
  - `finally()` → always  

### Characteristics:
- Returns response in **binary format**.  
- Requires **explicit data conversion** (like `.json()`).  
- Better than `XMLHttpRequest` in **security & error handling**.  
- It is a **JavaScript browser window API** method.  

### Syntax:
```javascript
fetch("url")
   .then(function(response){})
   .catch(function(error){})
   .finally(function(){});
````

---

## Example: Fetch Product (Flipkart Clone)

### 📂 Public/product.json

```json
{
  "title": "Apple iPhone 16 (Pink, 256 GB)",
  "price": 71999,
  "image": "iphone-pink.png",
  "rating": { "rate": 4.9, "ratings": 19106, "reviews": 793 },
  "offers": [
    "Bank Offer10% Off on Supermoney UPI. Max discount of ₹50. Minimum order value of ₹250.T&C",
    "Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C",
    "Bank Offer5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarterT&C",
    "Special PriceGet extra ₹27901 off (price inclusive of cashback/coupon)T&C"
  ]
}
```

### 📂 src/components/flipkart.jsx

```jsx
import { useEffect, useState } from "react";

export function Flipkart(){
    const [product, setProduct] = useState({
        title:null, price:0, image:null, 
        rating:{rate:0, ratings:0, reviews:0}, 
        offers:[]
    });

    function LoadProduct(){
       fetch("product.json")
       .then(response => response.json())
       .then(product => setProduct(product));
    }

    useEffect(()=> { LoadProduct(); },[]);

    return(
        <div className="row mt-4">
            <div className="col-3">
                <img src={product.image} width="100%" />
            </div>
            <div className="col-9">
                <div className="fs-5">{product.title}</div>
                <div className="mt-2">
                    <span className="badge bg-success text-white rounded">
                        {product.rating.rate} <span className="bi bi-star-fill"></span>
                    </span>
                    <span className="mx-2 fw-bold text-secondary">
                        {product.rating.ratings.toLocaleString('en-in')} ratings & {product.rating.reviews} reviews
                    </span>
                </div>
                <div className="my-2 fs-1 fw-bold">
                    {product.price.toLocaleString('en', {style:'currency', currency:'INR', minimumFractionDigits:0})}
                </div>
                <div className="mt-4">
                    <h6>Available Offers</h6>
                    <ul className="list-unstyled">
                        {product.offers.map(offer =>
                            <li className="bi bi-tag-fill text-success my-3" key={offer}>
                                <span className="text-secondary">{offer}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
```

---

## Issues with Fetch

* Requires **explicit conversions** (`response.json()` etc.)
* Firewall may block **COM to Marshal** (binary ↔ object conversion).
* **CORS** issues.
* Limited in **security & error handling**.

---

# React 3rd Party Libraries for AJAX

* **Axios**
* **WHATWG Fetch**
* **jQuery AJAX**

---

## Axios

* **Promise-based AJAX library**.
* Supports **client-side & server-side**.
* Better in **error handling & security**.
* Handles **CORS, XSRF, XSS**.
* Supports **canceling requests**.
* Handles **multiple requests simultaneously**.
* Uses **implicit data transformations** (no need for `response.json()`).

### Installation

```bash
npm install axios --save
```

### Import

```javascript
import axios from "axios";
```

### Methods

* `axios.get()` → Fetch data
* `axios.post()` → Save new data
* `axios.put()` → Update
* `axios.patch()` → Partial update
* `axios.delete()` → Delete

### Syntax

```javascript
axios.get("url")
    .then(function(response){ })
    .catch(function(error){ })
    .finally(function(){ });
```

### Response Object

* `headers` → request type, data type
* `data` → response data
* `status` → 200, 404, etc.
* `statusText` → OK, Not Found

---

## Example: Axios (Flipkart Clone)

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

export function Flipkart(){
    const [product, setProduct] = useState({
        title:null, price:0, image:null,
        rating:{rate:0, ratings:0, reviews:0}, 
        offers:[]
    });

    function LoadProduct(){
        axios.get("product.json")
        .then(response => setProduct(response.data));
    }

    useEffect(()=> { LoadProduct(); },[]);

    return(
        <div className="row mt-4">
            <div className="col-3">
                <img src={product.image} width="100%" />
            </div>
            <div className="col-9">
                <div className="fs-5">{product.title}</div>
                <div className="mt-2">
                    <span className="badge bg-success text-white rounded">
                        {product.rating.rate} <span className="bi bi-star-fill"></span>
                    </span>
                    <span className="mx-2 fw-bold text-secondary">
                        {product.rating.ratings.toLocaleString('en-in')} ratings & {product.rating.reviews} reviews
                    </span>
                </div>
                <div className="my-2 fs-1 fw-bold">
                    {product.price.toLocaleString('en', {style:'currency', currency:'INR', minimumFractionDigits:0})}
                </div>
                <div className="mt-4">
                    <h6>Available Offers</h6>
                    <ul className="list-unstyled">
                        {product.offers.map(offer =>
                            <li className="bi bi-tag-fill text-success my-3" key={offer}>
                                <span className="text-secondary">{offer}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
```

---

# API (Application Programming Interface)

## Distributed Computing

* Communication between applications on **different machines**.
* Communication between **objects in different processes** on same machine.

---

## Popular Distributed Technologies

* **CORBA** → Common Object Request Broker Architecture (14+ languages)
* **DCOM** → Distributed Component Object Model (Visual Basic)
* **RMI** → Remote Method Invocation (Java/J2EE)
* **EJB** → Enterprise Java Beans (Java)
* **Remoting** → .NET
* **Webservice** → All technologies

---

## Communication Specifications

* **SOAP**
* **REST**
* **JSON**

### SOAP

* **Service-Oriented Architecture Protocol**
* Consumer sends XML request:

```xml
<Movies>
  <Movie>
    <Generic>Thriller</Generic>
  </Movie>
</Movies>
```

* Provider responds in XML.

### REST

* **Representational State Transfer**
* Consumer sends simple query request:

```http
https://netflix.in/movies?generic=thriller
```

* Provider responds with JSON/XML:

```json
[
  { "title": "A", "generic": "thriller" }
]
```

### JSON

* **JavaScript Object Notation**
* Consumer → sends JSON
* Provider → responds with JSON

---

## Issues with Web Service

* Runs only on **HTTP server**
* Uses **SOAP only**
* Response always in **XML**

---

## Web API

* Lightweight & flexible alternative to web services.
* Uses **REST + JSON** widely.



---
**Date:** 17/10/25

# Distributed Computing

## Distributed Technologies  

## Communication Specifications  
- SOAP  
- REST  
- JSON  

## Issues with Web Service  

---

## FAQ: What is API?
- **Application Programming Interface**  
- It refers to business logic that handles communication between client, server, and database.  
- It uses REST for communication.  
- It is cross-platform and can run on any device.  

**Example:**  
Nasa API → [api.nasa.gov](https://api.nasa.gov)  

```url
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
````

API Key: `FJfuJp29jaHFRmmsz1MwNV0m3a2AbBkUdFiNyhoI`

---

## Example: Tabular Data - Grid (nasa.jsx)

```jsx
import axios from "axios";
import { useEffect, useState } from "react"

export function Nasa(){

    const [marsObject , setMarsObject] = useState({photos:[]});

    function LoadData(){
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=FJfuJp29jaHFRmmsz1MwNV0m3a2AbBkUdFiNyhoI')
        .then(response=>{
            setMarsObject(response.data);
        })
    }
    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview</th>
                        <th className="bi bi-camera"> Camera</th>
                        <th className="bi bi-rocket"> Rover </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marsObject.photos.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td> <img width="100" height="100" src={item.img_src} /> </td>
                                <td> {item.camera.full_name} </td>
                                <td> {item.rover.name} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
```

---

## Example: Nasa Mars Rover Photos - Card Style

```jsx
import axios from "axios";
import { useEffect, useState } from "react"

export function Nasa(){

    const [marsObject , setMarsObject] = useState({photos:[]});

    function LoadData(){
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=FJfuJp29jaHFRmmsz1MwNV0m3a2AbBkUdFiNyhoI')
        .then(response=>{
            setMarsObject(response.data);
        })
    }
    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos Cards</h2>
            <main className="d-flex flex-wrap">
                {
                    marsObject.photos.map(item=>
                        <div key={item.id} style={{width:'250px'}} className="card m-2 p-2">
                            <img src={item.img_src} className="card-img-top" height="120" />
                            <div className="card-header">
                                <div className="fs-4 fw-bold">{item.id}</div>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt className="bi bi-camera"> Camera</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt className="bi bi-rocket"> Rover </dt>
                                    <dd> {item.rover.name} </dd>
                                </dl>
                            </div>
                            <div>
                                <a href={item.img_src} target="_blank" className="bi bi-eye-fill btn btn-primary w-100"> Preview </a>
                            </div>
                        </div>
                    )
                }
            </main>
        </div>
    )
}
```

---

# Two Way Data Binding

* It is a data binding technique used in web applications.
* It identifies the changes in value and updates into source.
* It requires events that trigger actions and update the data.
* React supports only **one-way binding** implicitly, hence two-way-binding requires a lot of event binding.

---

# Event Binding

### 1. What is Event?

* Event is a message sent by sender to its subscriber in order to notify change.
* Event uses a “delegate” mechanism (function pointer).
* It follows the **Observer Pattern**, which is a communication pattern.

**Syntax:**

```js
function InsertClick() { }     // Subscriber  
<button onclick="InsertClick()">  // Sender
```

* Subscriber defines the actions to perform.
* Sender notifies the subscriber.

---

### 2. What is Event Handler?

* Events are triggers configured for any element.
* If you want an event to configure in design then it requires a handler to attach.

Examples:

* `click` → event
* `on` → handler
* `onclick` → event handler

```html
<button onclick="function(){}">Click</button>
```

---

### 3. What is Event Listener?

* It is used to configure events dynamically for any element.

**Syntax:**

```js
document.querySelector("button").addEventListener("event", function(){
   // action
})
```

---

### Example 1

```html
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script>
          function bodyload(){
            document.querySelector("button").addEventListener("click",()=>{
              document.write("Inserted");
          })  
          }
      </script>
</head>
<body onload="bodyload()">
      <button onclick="">Insert</button>
</body>
</html>
```

---

### Example 2

```html
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script>
          function bodyload(){
               var button = document.createElement("button");
               button.innerHTML = "Insert";
               button.addEventListener("click", ()=>{
                    document.write("Record Inserted");
               })
               document.querySelector("body").appendChild(button);
          }
      </script>
</head>
<body onload="bodyload()">
</body>
</html>
```



---

**Date:** 18/10/25


# Two Way Binding  

- It is a data binding technique used in web applications.  
- It identifies the changes in value and updates into source.  
- It requires events that trigger actions and update the data.  
- React supports only **one-way-binding** implicitly, hence two-way-binding requires a lot of event binding.  

---

# Event Binding  

## 1. What is Event?  
- **Observer**  
- **Delegate**  
- **Sender**  
- **Subscriber**  

---

## 2. What is Event Handler?  
- Events are triggers configured for any element.  
- If you want an event to configure in design then it requires a handler to attach.  

---

## 3. What is Event Listener?  
- It is used to configure events dynamically for any element.  

---

## 4. What are Event Arguments?  
- Arguments are used to handle payload.  
- Payload is the data carried from one location to another.  
- JavaScript provides **2 default arguments**:  
  - `this` → Information related to the current element (id, name, className, src, href, width, height, border, etc.)  
  - `event` → Information related to the current event (clientX, clientY, keyCode, charCode, shiftKey, ctrlKey, etc.)  

### Syntax (Handler with default args)
```js
function ClickHandler(obj, e) {
}
<button onclick="ClickHandler(this, event)">Click</button>
````

* Event handler can use **2 default arguments**.
* Event listeners can use **only one default argument**, which refers to `event`.
* However, listener event arguments can handle both element and event details.

### Syntax (Listener with event object)

```js
document.querySelector("button").addEventListener("click", function(e){
    e.clientX;       // event details
    e.clientY;       
    e.keyCode;

    e.target.id;     // element details
    e.target.name;
    e.target.className;
})
```

### Example (Listener with event + element details)

```html
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Event Arguments Example</title>
      <script>
               function bodyload(){
                    var button = document.createElement("button");
                    button.innerHTML = "Insert";
                    button.id="btnInsert";
                    button.name="Insert";
                    button.addEventListener("click", function(e){
                         console.log(`${e.clientX}\n${e.shiftKey}\n${e.target.name}\n${e.target.id}`);
                    })
                    document.querySelector("body").appendChild(button);
               }
      </script>
</head>
<body onload="bodyload()">
</body>
</html>
```

---

### Custom Arguments

* Event handler can handle custom arguments.
* Custom args can be any type (Primitive or Non-Primitive).

**Syntax:**

```js
function handler(obj, e, ...params) {
}
<button onclick="handler(this, event, 1, true, [], { })">Click</button>
```

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Custom Event Arguments</title>
      <script> 
          function DetailsClick(obj, e , ...product){
               console.log(product);
               console.log(obj.id);
               console.log(e.clientX);
          }
      </script>
</head>
<body>
   <button id="btnDetails" 
           onclick="DetailsClick(this, event, 1, 'TV', 34000, ['Delhi','Hyd'], {rating:4.5})">
           Product Details
   </button>
</body>
</html>
```

---

## 5. What is Event Propagation (Event Bubbling)?

* It is a mechanism where the child event simulates the parent events.
* You can prevent propagation by using `stopPropagation()`.

**Syntax:**

```js
function child_handler(e) {
    e.stopPropagation();
}
<child_element onclick="child_handler(event)">
```

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Event Bubbling</title>
     <script>
          function NavbarClick(){
               alert("navbar clicked");
          }
          function SearchClick(e){
               e.stopPropagation();
               alert("search clicked");
          }
     </script>
</head>
<body>
     <nav onclick="NavbarClick()" style="border:1px solid black; padding:10px">
          <h3>Amazon</h3>
          <button onclick="SearchClick(event)">Search</button>
     </nav>
</body>
</html>
```

---

## 6. How to Stop Default Event Actions?

* HTML elements have pre-defined functionality.
* They perform the default action along with specified action.
* You can stop the default action by using `preventDefault()`.

**Syntax:**

```js
function submit(e) {
   e.preventDefault();
}
<form onsubmit="submit(event)">
```

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Prevent Default Example</title>
     <script>
          function SubmitClick(e)
          {    
               e.preventDefault();
               alert('Form data submitted to API');
          }
     </script>
</head>
<body>
     <form onsubmit="SubmitClick(event)">
          <input type="text" required name="user"> <button>Submit</button>
     </form>
</body>
</html>
```

---

## 7. What is Event Looping?

* Event looping is a mechanism of executing tasks in a specific order.
* Every event follows the same order:

1. **General Task**
2. **Micro Task** (Promise)
3. **Asynchronous** (Timeout)

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Event Looping</title>
     <script>
         function ClickMe(){
              var task = new Promise((resolve, reject)=>{
                   resolve("Third Task");
              });
              task.then(msg=>{
                console.log(msg);
              })

              console.log("First Task");

              setTimeout(function(){
                  console.log("Second Task");
              },0);
         }
     </script>
</head>
<body>
     <button onclick="ClickMe()">Click Me</button>
</body>
</html>
```

---

## 8. What is Event Profiling?

* Event profiling is a mechanism of tracking performance of any event in browser debugging tools.
* Developers can track event log and identify issues in events.


**Date:** 19/10/25



# JavaScript Events  

- **Event**  
- **Event Handler**  
- **Event Listener**  
- **Event Arguments**  
- **`this` & `event`**  
- **Custom Arguments**  
- **Event Propagation / Bubbling**  
- **Prevent Default**  
- **Event Loop**  
- **Event Profiling**  

---

# React Event Binding  

- JavaScript events are **browser events**.  
- Events are configured using browser **`window`** object.  
- React cannot directly use browser events.  
- React uses **`SyntheticEvents`** library, which provides events for the Virtual DOM.  
- `SyntheticEvent` maps to the browser event in the actual DOM.  

| Actual DOM Event | Synthetic Event |
|------------------|-----------------|
| `onclick`        | `onClick`       |
| `onchange`       | `onChange`      |
| `ondblclick`     | `onDoubleClick` |
| `onblur`         | `onBlur`        |
| etc..            | etc..           |

- Event uses a delegate mechanism to notify subscribers.  

### Example Syntax  
```jsx
function handleInsertClick() {
}

<button onClick={ handleInsertClick }> Insert </button>
````

---

## Event Argument in React

* React event handler provides only **event** as default argument (implicitly configured).

```jsx
function handleInsertClick(e) {
}

<button onClick={ handleInsertClick }>
```

* The default event argument can handle both element and event details:

```js
e.clientX 
e.keyCode
e.target.id
e.target.name
```

### Example

```jsx
// event-binding.jsx
export function EventBinding(){
    function handleInsertClick(e){
        console.log(`Button Value : ${e.target.value}\nButton Class : ${e.target.className}\nX Position : ${e.clientX}`);
    }

    return(
        <div className="p-4">
            <button value="Insert" className="btn btn-primary" onClick={handleInsertClick}>Insert</button>
        </div>
    )
}
```

---

## Custom Arguments

* Custom arguments are configured by using a **new function** that executes on event trigger.
* This allocates a new memory and loads the custom arguments.

### Syntax

```jsx
<button onClick={ () => { handleInsertClick(arg1, arg2, arg3) } }> 

function handleInsertClick(param1, param2, param3) {
}

function handleInsertClick(...params) {
}
```

* Event handler with **both default and custom arguments**:

```jsx
<button onClick={ (event) => { handleInsertClick(arg1, arg2, event) } }>

function handleInsertClick(param1, param2, e) {
}
```

📌 Note: `"event"` is just a formal name, which refers to the event argument.

### Example

```jsx
export function EventBinding(){
    function handleInsertClick(id, name, cities, e){
        console.log(`id=${id}\nname=${name}\ncities=${cities}`);
        console.log(`${e.target.value}\n${e.clientX}`);
    }

    return(
        <div className="p-4">
            <button value="Insert" className="btn btn-primary" 
                onClick={(event)=>{handleInsertClick(1, 'TV', ['Delhi', 'Hyd'], event)}}>Insert</button>
        </div>
    )
}
```

---

## Event for Two-Way Binding

* JavaScript can use various events to detect value changes and update source.
* React supports two-way binding only using **`onChange`** event.
* If `onChange` is not configured, the input is **read-only**.

### Syntax

```jsx
<input type="text" onChange={ handleNameChange } />
<select onChange={ handleCityName } />

function handleNameChange(e){
    e.target.value;   // access element value
}
```

### Example

```jsx
import { useState } from "react"

export function EventBinding(){
    const [user, setUser] = useState('John');
   
    function handleNameChange(e){
        setUser(e.target.value);
    }

    return(
        <div className="p-4">
            <input type="text" onChange={handleNameChange} value={user} />
            <p> {user} </p>
        </div>
    )
}
```

---

# Synthetic Events

* **`SyntheticEvent`** is the base for all events in React Virtual DOM.
* Categories:

  1. Mouse Events
  2. Keyboard Events
  3. Button Events
  4. Clipboard Events
  5. Element State Events
  6. Timer Events
  7. Touch Events
  8. Form Events

### Mouse Events

* `onMouseOver`
* `onMouseOut`
* `onMouseDown`
* `onMouseUp`
* `onMouseMove`

---

## Example: Mouse Over Preview

### 1. `public/mobiles.json`

```json
[
    { "img_src": "iphone-green.jpg" },
    { "img_src": "iphone-pink.png" },
    { "img_src": "iphone-purple.jpg" },
    { "img_src": "iphone-white.png" }
]
```

### 2. `components/event-binding.jsx`

```jsx
import axios from "axios";
import { useEffect, useState } from "react"
import './event-binding.css';

export function EventBinding(){
    const [mobiles, setMobiles] = useState([{img_src:null}]);
    const [preview, setPreivew] = useState('iphone-green.jpg');

    function LoadMobiles(){
        axios.get("mobiles.json")
        .then(response=>{
             setMobiles(response.data);
        })
    }

    useEffect(()=>{
        LoadMobiles();
    },[])

    function handleMouseOver(e){
        setPreivew(e.target.src);
    }

    return(
        <div className="p-4">
           <div className="row">
                <div className="col-2">
                    {
                        mobiles.map((mobile, index)=>
                            <div className="my-4" key={index}>
                                <img className="border-style" 
                                    onMouseOver={handleMouseOver} 
                                    src={mobile.img_src} 
                                    width="50" height="50" />
                            </div>
                        )
                    }
                </div>
                <div className="col-10">
                    <img width="400" height="400" src={preview} />
                </div>
           </div>
        </div>
    )
}
```

### 3. `components/event-binding.css`

```css
.border-style {
    border: 2px solid gray;
    padding: 10px;
}
.border-style:hover {
    border: 2px solid blue;
    padding: 10px;
    cursor: grab;
}
```



---

**Date:** 22/10/25



# Synthetic Events  

## Mouse Events  
- **onMouseOver**  
- **onMouseOut**  
- **onMouseDown**  
- **onMouseUp**  
- **onMouseMove**  

---

# CSS Keyframes  

- Allow configuring **custom animation** for elements.  
- A keyframe has an **initial state**, **final state**, and **break points**.  

### Syntax  
```css
@keyframes Name {
    from { initial state }   /* or 1% { } */
    20% { }
    80% { }
    to { final state }       /* or 100% { } */
}
````

---

# CSS Animation Attributes

* Animation attributes are required to configure effects with keyframes.

a) **animation-name** → Refers to keyframe name
b) **animation-duration** → Total time for animation
c) **animation-delay** → Delay before start
d) **animation-iteration-count** → Number of loops
e) **animation-direction** → Reverse animation if needed
f) **animation-timing-function** → Pre-defined styles (`ease-in`, `ease-out`, `linear`, `steps`)

📌 Note: In React, animation attributes use **camelCase**.

### Syntax in React

```jsx
<img style={{ animationName: 'name', animationDuration: '5s' }} />
```

---

## Example: Mouse Down & Mouse Up

### 1. `mouse-demo.css`

```css
@keyframes Spin {
    from {
        transform: rotate(0deg) scale(1);
    }
    to {
        transform: rotate(360deg) scale(2);
    }
}
```

### 2. `mouse-demo.jsx`

```jsx
import { useState } from 'react';
import './mouse-demo.css';

export function MouseDemo(){
    const [animationObject, setAnimationObject] = useState({
        animationName: 'Spin',
        animationDuration: '5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
    });

    function handleMouseUp(){
        setAnimationObject({
            animationName: 'Spin',
            animationDuration: '5s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        });
    }

    function handleMouseDown(){
        setAnimationObject({
            animationName: 'Spin',
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        });
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} src='react.svg' style={animationObject} width="200" height="200" />
        </div>
    )
}
```

---

## Example: Mouse Move

### `mouse-move.jsx`

```jsx
import { useState } from "react"

export function MouseMove(){
    const [styleObj, setStyleObject] = useState({});

    function handleMouseMove(e){
        setStyleObject({
            position: 'fixed',
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        });
    }

    return(
        <div className="p-3" onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>
                <p className="fs-3">Move mouse pointer to test</p>
            </div>
            <img width="50" style={styleObj} height="50" src="flag.gif" />
        </div>
    )
}
```

---

# Keyboard Events

* **onKeyUp**
* **onKeyDown**
* **onKeyPress**

### Notes

* `onKeyUp` & `onKeyDown` → handle input characters.
* `onKeyPress` → handles input char code.
* ⚠️ **KeyPress is deprecated** in React (use `onKeyUp` / `onKeyDown` instead with `charCode`).

---

## Example: User ID Validation

### 1. `public/users.json`

```json
[
    { "user_id": "john" },
    { "user_id": "john12" },
    { "user_id": "john_nit" },
    { "user_id": "david" }
]
```

### 2. `key-demo.jsx`

```jsx
import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo(){
    const [users, setUsers] = useState([{user_id:null}]);
    const [msg, setMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');

    function LoadUsers(){
        axios.get("users.json")
        .then(response=>{
            setUsers(response.data);
        });
    }

    useEffect(()=>{
        LoadUsers();
    },[]);
    
    function VerifyUser(e){
        for (let user of users){
            if(user.user_id === e.target.value){
                setMsg('User Id Taken - Try Another');
                setErrorClass('text-danger');
                return;
            }
        }
        setMsg('User Id Available');
        setErrorClass('text-success');
    }

    return(
        <div className="p-3">
            <h3>Register User</h3>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUser} /></dd>
                <dd className={errorClass}>{msg}</dd>
            </dl>
        </div>
    )
}
```
