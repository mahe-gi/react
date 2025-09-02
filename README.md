Features of React:

1. it is component based
   1. reusable
   2. extensible
   3. light weight
   4. faster
2. it uses virtual DOM

   1. faster in rendering & painting
   2. it can respond faster that traditional DOM
   3. MARKUP → BINARY → CHARECTERS → ELEMETS OR TOKENS → DOM→LAYOUT→ RENDER → PAINT → BROWSER

   FAQS:

   1.what is DOM?

   - dom is a hierarchy of elements in page
   - it is a part of BOM [browser Object Model]

   https://dev.to/snickdx/how-well-do-you-know-dom-javascript-3fl5

   1. what is shadow DOM?
      - shadow DOM is a hierarchy of elemetns in a **component**
      - every component is designed with styles ,markup and logic

   3.what is VIRTUAL DOM?

   - it is a copy of actual DOM in memory
   - application updates into virtual DOM and renders virtual result to UI
   - this makes the application appear faster in output when compared to traditional web application.

   -as-is to-be -gap table

3.modular

- application specific framework
- it uses only what is required for the situvation
- it makes light weight and faster

issues of React:

-virtual DOM is always not good for rendering .

-virtual DOM is not good for indexing

-SEO issues

-Rapid pace of development

-poor documentation

-lot of GAP’s → if you want something that react doesn’t have → like third party plugins → forms → routing

SETUP ENVIRONMENT FOR REACT:

1. download and install Node js on your PC
   1. node js is a javascript runtime used by developers to build web applications ,servers,scripts and command line tools.
   2. Node js provides a package manager ‘npm’
      1. yarn ,bower,ruby gems,nuget etc.
   3. download process → nodejs website → lts
   4. check version → terminal
2. download and install vs code or any IDE
3. download extensions in vs code
   1. Live server
   2. vscode-icons
   3. live priview
   4. intellisense - for css class names
   5. eslint → it will tell language analasis → good practices
   6. prettier

-code analyzers / best practices → [pmd-code.org](http://pmd-code.org) → src analyzer → bad code vs good code

3.create a new web-application

sandbox→development→quality→ production - diff servers to work

home.js → home.min.js →minify
