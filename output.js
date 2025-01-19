//Sun Jan 19 2025 10:55:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var body = $response.body;
const url = $request.url;
var obj = JSON.parse(body);
const vip = "/api/users/fetch/info";
url.indexOf(vip) != -1 && (obj.data.isVip = true, obj.data.vip.expire = "2099-09-09T05:41:38.139Z", body = JSON.stringify(obj));
$done({
  body: body
});