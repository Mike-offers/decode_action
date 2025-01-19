//Sun Jan 19 2025 10:16:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x56e4c4;
var _0x325b7c = $response.body;
_0x56e4c4 = 8;
var _0x56dbd4;
let _0x414e70 = JSON.parse($response.body);
_0x56dbd4 = "adep";
_0x414e70.results[0].isSVIP = 1;
_0x414e70.results[0].isVIP = 1;
_0x414e70.results[0].vipEndTime = 32493852612;
_0x414e70.results[0].svipEndTime = 32493852612;
_0x414e70.results[0].coin = 999880;
_0x414e70.results[0].nickName = "https://t.me/GieGie777";
$done({
  body: JSON.stringify(_0x414e70)
});