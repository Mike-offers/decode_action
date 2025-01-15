//Wed Jan 15 2025 13:42:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var body = $response.body;
const url = $request.url;
var obj = JSON.parse(body);
const vip = "/member/userMemberHomePageV2";
url.indexOf(vip) != -1 && (obj.data.memberInfos[0].isMember = 0, obj.data.memberInfos[0].memberLevel = 0, obj.data.memberInfos[0].memberExpirationTime = "2099/09/09", body = JSON.stringify(obj));
var _0x576db2 = {
  body: body
};
$done(_0x576db2);