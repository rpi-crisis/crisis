##Cached Data

### localForage
We use a [localForage](https://github.com/localForage/localForage), a localStorage replacement, cache to store the data.
There are many hurdles in storing data more than a few MB locally, but localForage is a great solution.
It provides browser-specific storage, and hence is tailored to the needs of most browsers.

### Alternatives
I looked into many alternatives, but most of them are either too complicated or too slow. As aforementioned,
localStorage has a limit of 5MB. [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) is normally great, but certain versions of many browsers lacked support blob caching.
[WebSQL](https://www.w3.org/TR/webdatabase/) is an alternative, but it deprecated and not supported by all browsers.
[Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache), part of [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API),
is another alternative, but frankly it is overkill for something that currently has no plans of becoming a progressive web app.

### Usage
Using [localForage](https://github.com/localForage/localForage) is very similar to localStorage. The only difference is that it is a promise-based API.
Since it is an external library however, we do need to fist install it using npm.

Run `npm install` in your project directory to install it in your project. After that, you can import and use it.

```typescript
import * as localforage from "localforage";

// The way that I use localforage uses promises:
// The .then() method is called when the promise is resolved.
// The .catch() method is called when the promise is rejected.
// The .finally() method is called when the promise is either resolved or rejected.
// You do not need to call .then() or .catch() if you do not need to handle the promise's result.
localforage.setItem("string_key", "string_value")
  .then(() => {
    console.log("This gets printed only after the value is set.\n");
  }).catch((error)=>{
    console.log("An error occured storing this data.\n" + error + "\n");
});
localforage.getItem("string_key")
  .then((value) => {
    console.log("This gets printed only after the value is retrieved.\n" + value + "\n");
  }).finally(()=>{
    console.log("The function has completed. It may or may not have failed.\n");
  });

// You can also use async/await syntax:
let value = await localforage.getItem("string_key");
let error = await localforage.setItem("string_key", "string_value");

// If you need to, you can also use a callback-based implementation:
localforage.setItem("string_key", "string_value", 
  async function(){
    let stored_value = await localforage.getItem("string_key");
    console.log("We got the stored value:\n" + stored_value + "\n");
  });

```