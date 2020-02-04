# Javascript high level Notes

## Async JS - Travismedia Crashcourse

[video]("https://www.youtube.com/watch?v=PoRJizFvM7s&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=12&t=0s")

### What it is

Asynchronous programming - do not wait for a item of code to finish. Continue on with other code. Keeps program from "Stalling".

- Callbacks
  - Original
- Promises
  - ES6 - promise.all() wait for all things to finish
- Async Await
- ES7 - looks more like sequential programming

## AJAX - Asynchronouhg Javascript & XML

[video]("https://www.youtube.com/watch?v=82hnvUYY6QA&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=12")

### What it is

- Asynchronous JS and XML
- Set of web tech without having to reload the page send / recieve data between client and server
- json taken place of xml
- A middle man between Server and client to get server info without needing to click a link and go to a new page. Same page info

### how it works

- Server / client - Common requests & response
  - Contains: header webpage, body, everything
- AJAX engine
  - Server -> Ajax engine
    - XML/HTTP/Request to server -> responds with XML/JSON
  - Client -> AJAX engine
    - JS/Library/Jquery/Axious call -> AJAX
    - AJAX responds with HTML responses

### XMLHtppRequest (XHR) object

- API in the form of an object
- Provided by the browser's JS env
- Methods transfer data between client/erver
- Can be used with other protocals than HTPP
- Can work work with data other than XML (JSON, plain text)

### Libraries & Other Methods

- JQuery, Axios, Superagent, Fetech API, Prototype, Node HTTP
- JQuery
  - DOM manipulation library. Overkill for just AJAX. Only use if need JQuery for others
- Axios and Superagent ILO of JQuery for small app
- Fetch API
  - Browser imbedded API
- Prototype - librar
- Node.js
  - Node HTTP requets

## JS Fetch API

- New form of AJAX
