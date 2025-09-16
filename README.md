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

**Date:** 07/10/25

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
**Date:** 08/10/25


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
**Date:** 09/10/25


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

**Date:** 10/10/25

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
-----------