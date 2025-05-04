//Sun May 04 2025 13:00:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var ojbk = JSON.parse($response.body);
const vip = "/config",
  vip1 = "/redeem",
  vip2 = "/com";
$request.url.indexOf(vip) != -1 && (ojbk = {
  "code": 200,
  "msg": "成功",
  "data": {
    "open": true,
    "open_default": false,
    "param": "",
    "param_default": ""
  }
});
$request.url.indexOf(vip1) != -1 && (ojbk = {
  "code": 200,
  "msg": "兑换成功",
  "data": {
    "idRewards": [{
      "id": 20001,
      "count": 99970
    }, {
      "id": 20002,
      "count": 9900000
    }, {
      "id": 20003,
      "count": 91000
    }, {
      "id": 20004,
      "count": 9900000
    }],
    "typeRewards": {}
  }
});
$request.url.indexOf(vip2) != -1 && (ojbk.body = ojbk.body.replace(/\"c":"\d+"/g, "\"c\":\"0\""));
$done({
  "body": JSON.stringify(ojbk)
});