# Landing Page / Product
 
    Features:
 
        > Product Presentation
        > Order Product
        > Payment
        > Email Notification / Confirmation
        ? Admin Panel

    Tech Stack:

        > Back-End
            - Node.js
            - Http Mini Server
            - API End Point
            ? Database
        
        > Front-End
            - HTML
            - CSS (Scss)
            - JS (Ajax/Fetch) - API
            ? Bootstrap
            ? React

        > VCS
            - Git
            - GitHub




    PC
    |
+---+------------------------------------------------------------------------+
|             OS ( Windows)                                                  |
+----------------------------------------------------------------------------+
|                                                                 localhost  |                 TV 192.168.0.113
|  Node -> server.mjs                                             127.0.0.1  |                       ↑
|            |                                                            \  |  network interface    |
|            +-- server                                                    \ | /                     ↓
|                  |                                                         + <------------> [router/modem] <----> internet
|               +--+-----------------------+                               / |                       ↑             
|               |                          |          HTTP(5)             /  |                       |
|               |                          |                             |   |                       ↓   192.168.0.122 
|               |                          |<--------- req <----------+  |   |                   smartphone
|               |                          |                          |  |   |  
|               |                          |                          |  |   |  
|               |                          |----------> res ----------+  |   |  
|               |                          |                             |   |  
|               |    .listen() <------------------------ 8888 -----------+   |  
|               |                          |                                 |  
|               +--------------------------+                                 |  
|                                                                            |
|                                                                            |
+----------------------------------------------------------------------------+


















