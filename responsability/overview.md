
## Node JS (Client JS) / Responsability / Exceptions
    > Call Stack ( Function Call )
    > Catching Errors
    > Throwing Errors
    > Async ( Callback / Promises )








    
ParseCSS ( CSS )
    |
    .
    .
    .
    |
   Return ( Object )



    OS (Windows)                                     |
        |                                            |
        ▼                                            |
    Node.js(JS VM)                                   |
        |                                            |
        ▼                                            |
    Process                                          |
        |                                            |
        ▼                                            |
    Module (index.mjs)                               -
        |                                            x   
        ▼                                            x
processMultipleCss (...)    // HIGH                  x <---- Catch error ----> message
    |                                                |
    +----> .map()                                    |
             |                                       | 
             +--> parseCSS (...)    // LOW         throw error
                     |                               |
                     |                               |
                     +-------------------------------+



ParseCSS ( "color: red; background-color: white;" )
    |
    {
        color: "red";
        backgrondcolor: "white";
    }
    |
   return ( Object )


