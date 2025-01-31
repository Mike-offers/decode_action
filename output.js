//Fri Jan 31 2025 16:26:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var _0x108076 = $response.body;
var _0x6e8a19 = $request.url;
const _0x53d87c = "api.wokanjian.com.cn/";
const _0x1fdc5c = "/au/findIWUserInfoById.do";
if (typeof _0x108076 === "string") {
  if (_0x6e8a19.indexOf(_0x53d87c) !== -1) {
    _0x108076 = _0x108076.replace(/viptype":\d/g, "viptype\":1").replace(/isVIP":\d/g, "isVIP\":1").replace(/vipStatus":\d/g, "vipStatus\":1").replace(/isBuy":\d/g, "isBuy\":1");
  }
  var _0x450b06;
  try {
    _0x450b06 = JSON.parse(_0x108076);
    if (_0x6e8a19.indexOf(_0x1fdc5c) !== -1) {
      _0x450b06.iwUserInfo.viptype = 1;
      _0x450b06.iwUserInfo.isVIP = 1;
      _0x450b06.iwUserInfo.vipStatus = 1;
      _0x450b06.iwUserInfo.username = "https://t.me/GieGie777";
      _0x108076 = JSON.stringify(_0x450b06);
    }
  } catch (_0x2dc0de) {
    console.log("JSON 解析错误: " + _0x2dc0de.message);
  }
}
$done({
  body: _0x108076
});
(function (_0xf81cc, _0x22ef0f, _0x2d6221) {
  var _0x58a46f = function () {
    {
      var _0x193ef7 = true;
      return function (_0x487c79, _0x5cfe15) {
        {
          var _0x257b65 = _0x193ef7 ? function () {
            if (_0x5cfe15) {
              var _0x42d776 = _0x5cfe15.apply(_0x487c79, arguments);
              _0x5cfe15 = null;
              return _0x42d776;
            }
          } : function () {};
          _0x193ef7 = false;
          return _0x257b65;
        }
      };
    }
  }();
  var _0x398a88 = _0x58a46f(this, function () {
    {
      var _0x5c3533 = function () {};
      var _0x44b14c = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x44b14c.console) {
        _0x44b14c.console = function (_0x40588a) {
          var _0x2d6221 = {};
          _0x2d6221.log = _0x40588a;
          _0x2d6221.warn = _0x40588a;
          _0x2d6221.debug = _0x40588a;
          _0x2d6221.info = _0x40588a;
          _0x2d6221.error = _0x40588a;
          _0x2d6221.exception = _0x40588a;
          _0x2d6221.trace = _0x40588a;
          return _0x2d6221;
        }(_0x5c3533);
      } else {
        _0x44b14c.console.log = _0x5c3533;
        _0x44b14c.console.warn = _0x5c3533;
        _0x44b14c.console.debug = _0x5c3533;
        _0x44b14c.console.info = _0x5c3533;
        _0x44b14c.console.error = _0x5c3533;
        _0x44b14c.console.exception = _0x5c3533;
        _0x44b14c.console.trace = _0x5c3533;
      }
    }
  });
  _0x398a88();
  _0x2d6221 = "al";
  try {
    {
      _0x2d6221 += "ert";
      _0x22ef0f = encode_version;
      if (!(typeof _0x22ef0f !== "undefined" && _0x22ef0f === "jsjiami.com.v5")) {
        _0xf81cc[_0x2d6221]("ɾ��版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x9ff383) {
    _0xf81cc[_0x2d6221]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";