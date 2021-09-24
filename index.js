var express = require('express');
var app = express();
var axios = require('axios'); 
var client= require('./module');
 


app.get('/', function(req, res){
   client.sendRequest('get','https://www.supremenewyork.com/',{ 
    'authority': 'www.supremenewyork.com', 
    'cache-control': 'max-age=0', 
    'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'upgrade-insecure-requests': '1', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36', 
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
    'sec-fetch-site': 'none', 
    'sec-fetch-mode': 'navigate', 
    'sec-fetch-user': '?1', 
    'sec-fetch-dest': 'document', 
    'accept-language': 'en-US,en;q=0.9,ar;q=0.8', 
    'cookie': ''
  },{"authority": "www.supremenewyork.com","cache-control": "max-age=0"})
  // sendRequest('get','https://www.supremenewyork.com/',{ 
  //   'authority': 'www.supremenewyork.com', 
  //   'cache-control': 'max-age=0', 
  //   'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"', 
  //   'sec-ch-ua-mobile': '?0', 
  //   'sec-ch-ua-platform': '"Windows"', 
  //   'upgrade-insecure-requests': '1', 
  //   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36', 
  //   'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
  //   'sec-fetch-site': 'none', 
  //   'sec-fetch-mode': 'navigate', 
  //   'sec-fetch-user': '?1', 
  //   'sec-fetch-dest': 'document', 
  //   'accept-language': 'en-US,en;q=0.9,ar;q=0.8', 
  //   'cookie': ''
  // })
//   var data = new FormData();
// data.append('sc', 'cs');

 
  
   res.send("Hello World!");
});

// app.get('/a', function(req, res){
//   var config = {
//     method: 'get',
//     url: 'https://www.cookieserve.com/',
//     headers: { 
//       'authority': 'https://www.cookieserve.com/', 
//       'cache-control': 'max-age=0', 
//       'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"', 
//       'sec-ch-ua-mobile': '?0', 
//       'sec-ch-ua-platform': '"Windows"', 
//       'upgrade-insecure-requests': '1', 
//       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36', 
//       'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
//       'sec-fetch-site': 'none', 
//       'sec-fetch-mode': 'navigate', 
//       'sec-fetch-user': '?1', 
//       'sec-fetch-dest': 'document', 
//       'accept-language': 'en-US,en;q=0.9,ar;q=0.8', 
//       'cookie': ''
//     }
//   };
  
//   axios(config)
//   .then(function (response) {
//     // store.push(response.headers['set-cookie']) 
//      cookiesStore=response.headers['set-cookie'].toString();
//      console.log(cookiesStore)
//     // console.log(response.headers['set-cookie'].toString());
//     // console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
  
//    res.send("Hello World!");
// });

app.listen(3000);
