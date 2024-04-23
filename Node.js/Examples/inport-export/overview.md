## JS (ES2020+)
    Server/browser - Modules(import/export)
    > Old (exports, require())      / common JS Modules
    > New (export, import)          / ES modules


                                                Main app module <---- node app.js (!Entry Point!)
                 +--- Dependency -------+          /
                /                        \        /
    +=----- Module ------=+         +=-- App (module) ---=+ 
    |   let localVar...   |         |    let localVar     |
    |  const localFunc... |         |  const localFunc... |
    | class localClass... |         |                     |
    |                     |         |                     |
    |                     |         |                     |
    |                     |         |                     |
    |                     |         |                     |
    |                     |         |                     |
    |                     |         |                     |
    |                     |         |                     |
    |                     |         |                     |
    |                     |         |                     |
    |                     |         |                     |
    |                     |         |                     |