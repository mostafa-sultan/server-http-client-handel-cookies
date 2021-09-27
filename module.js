var cookiesStore = "";
var axios = require('axios');
exports.cookiesStore = cookiesStore;
exports.sendRequest = async (method, url, headers, body) => {
  headers["cookie"] = cookiesStore;
  var config = {
    method: method,
    url: url,
    headers: headers,
    data: body
  };
  var res = await axios(config)
  if (res) {
    try {
      cookiesStore = res.headers['set-cookie'].toString() + cookiesStore;
    } catch (e) { }
    return res.data
  } else {
    return "";
  }

}
