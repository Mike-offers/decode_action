//Sun Jan 26 2025 16:28:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var body = $response.body;
var url = $request.url;
const p1 = "/daquan2_rest.action?manhua";
const p2 = "?type=";
if (typeof body === "string") {
  if (url.indexOf(p1) !== -1) {
    body = body.replace(/"coinPrice":\d+/g, "\"coinPrice\" : 0");
  }
  var obj;
  try {
    obj = JSON.parse(body);
    if (url.indexOf(p2) !== -1) {
      obj.user.chatName = "https://t.me/GieGie777";
      obj.user.avatarUrl = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
      obj.user.vipExpiredTime = "2999-09-09";
      obj.user.userTypeName = "永久VIP";
      obj.user.message = "����VIP";
      obj.user.userType = 1;
      body = JSON.stringify(obj);
    }
  } catch (_0xa67507) {
    console.log("JSON 解析错误: " + _0xa67507.message);
  }
}
$done({
  body: body
});
(function (_0x4ff265, _0x2a41e5, _0x3b11c2) {
  _0x3b11c2 = "al";
  try {
    _0x3b11c2 += "ert";
    _0x2a41e5 = encode_version;
    if (!(typeof _0x2a41e5 !== "undefined" && _0x2a41e5 === "jsjiami.com.v5")) {
      _0x4ff265[_0x3b11c2]("ɾ��版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x3eb9d7) {
    _0x4ff265[_0x3b11c2]("ɾ���汾�ţ�js�ᶨ�ڵ���");
  }
})(window);
encode_version = "jsjiami.com.v5";