var cookiesStore="";
var axios = require('axios'); 

exports.cookiesStore = cookiesStore;
exports.sendRequestSync = async (method,url,headers,body) => { 
   headers["cookie"] = cookiesStore;
    store="";
    var config = {
      method: method,
      url: url,
      headers:headers,
      data : body
    }; 
   await axios(config)
    .then(function (response) {  
       cookiesStore=response.headers['set-cookie'].toString()+cookiesStore;
       console.log(cookiesStore) 
       return cookiesStore;
    })
    .catch(function (error) {
      console.log(error);
    });
    return store;
  }


  exports.sendRequest =  (method,url,headers,body) => { 
    headers["cookie"] = cookiesStore;
    store="";
    var config = {
      method: method,
      url: url,
      headers:headers,
      data : body
    }; 
    console.log(config)
    axios(config)
    .then(function (response) {  
       cookiesStore=response.headers['set-cookie'].toString()+cookiesStore;
    //    console.log(cookiesStore) 
       return cookiesStore;
    })
    .catch(function (error) {
      console.log(error);
    });
    return store;
  }
