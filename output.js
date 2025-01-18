//Sat Jan 18 2025 05:34:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let body = JSON.parse($response.body);
function modifyObject(_0x1916ab) {
  for (let _0x36569b in _0x1916ab) {
    _0x1916ab.hasOwnProperty(_0x36569b) && (typeof _0x1916ab[_0x36569b] === "object" && _0x1916ab[_0x36569b] !== null ? modifyObject(_0x1916ab[_0x36569b]) : (_0x36569b === "type_text" && (_0x1916ab[_0x36569b] = "永久会员"), _0x36569b === "type" && (_0x1916ab[_0x36569b] = "studio.2players.wardrobe.pro.lifetime"), _0x36569b === "expired_at" && (_0x1916ab[_0x36569b] = "2099-09-09")));
  }
}
modifyObject(body);
$done({
  body: JSON.stringify(body)
});