# get cookie from response and resend it automatic
* for bots 
## example
```
var  client = require('server-http-client-handel-cookies'); 
console.log( client.sendRequest(
"get",                  //method
"https://github.com/", //url
{"kj":"jl"},           //headers
{}                     //body
))

