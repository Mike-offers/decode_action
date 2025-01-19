//Sun Jan 19 2025 10:37:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var _0xb6bede = $response.body;
var _0x2c3580 = $request.url;
const _0x269d9d = "/auth/getUserByUserid";
const _0x33e61f = "/comic/getComicDetialByid";
if (typeof _0xb6bede === "string") {
  if (_0x2c3580.indexOf(_0x33e61f) !== -1) {
    _0xb6bede = _0xb6bede.replace(/lock":\w+/g, "lock\":false");
  }
  var _0x231186;
  try {
    _0x231186 = JSON.parse(_0xb6bede);
    if (_0x2c3580.indexOf(_0x269d9d) !== -1) {
      _0x231186.message.user_nickname = "https://t.me/GieGie777";
      _0x231186.message.user_headimg = "https://zdimg.lifeweek.com.cn/app/20240614/17183119665002415.jpg";
      _0x231186.message.vip_time = 32493834549000;
      _0x231186.message.no_ad_time = 32493834549000;
      _0x231186.message.card_num = 999880;
      _0x231186.message.level = 5;
      _0xb6bede = JSON.stringify(_0x231186);
    }
  } catch (_0x5758ab) {
    console.log("JSON 解析错误: " + _0x5758ab.message);
  }
}
$done({
  body: _0xb6bede
});
(function (_0x13efa3, _0x22d2db, _0x39d43d) {
  var _0x2dbb58 = function () {
    {
      var _0x4fc369 = true;
      return function (_0x4c98a9, _0x3c3c6f) {
        var _0x4b4b58 = _0x4fc369 ? function () {
          if (_0x3c3c6f) {
            var _0x4710ef = _0x3c3c6f.apply(_0x4c98a9, arguments);
            _0x3c3c6f = null;
            return _0x4710ef;
          }
        } : function () {};
        _0x4fc369 = false;
        return _0x4b4b58;
      };
    }
  }();
  var _0x506371 = _0x2dbb58(this, function () {
    {
      var _0x2fc6af = function () {};
      var _0x3afda3 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x3afda3.console) {
        {
          _0x3afda3.console = function (_0x29ee07) {
            var _0x39d43d = {};
            _0x39d43d.log = _0x29ee07;
            _0x39d43d.warn = _0x29ee07;
            _0x39d43d.debug = _0x29ee07;
            _0x39d43d.info = _0x29ee07;
            _0x39d43d.error = _0x29ee07;
            _0x39d43d.exception = _0x29ee07;
            _0x39d43d.trace = _0x29ee07;
            return _0x39d43d;
          }(_0x2fc6af);
        }
      } else {
        _0x3afda3.console.log = _0x2fc6af;
        _0x3afda3.console.warn = _0x2fc6af;
        _0x3afda3.console.debug = _0x2fc6af;
        _0x3afda3.console.info = _0x2fc6af;
        _0x3afda3.console.error = _0x2fc6af;
        _0x3afda3.console.exception = _0x2fc6af;
        _0x3afda3.console.trace = _0x2fc6af;
      }
    }
  });
  _0x506371();
  _0x39d43d = "al";
  try {
    _0x39d43d += "ert";
    _0x22d2db = encode_version;
    if (!(typeof _0x22d2db !== "undefined" && _0x22d2db === "jsjiami.com.v5")) {
      _0x13efa3[_0x39d43d]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x3d0f72) {
    _0x13efa3[_0x39d43d]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";