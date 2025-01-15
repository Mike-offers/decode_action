//Wed Jan 15 2025 03:33:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var _0x1ea913 = $response.body;
var _0x55c02c = $request.url;
const _0x19dba8 = "/api/user/getUserById";
const _0xd80e77 = "https://pc7dong.com/";
const _0x110c3b = "/api/user/getStartUpImages";
const _0x1e00c5 = "/seveng/api/voice/updateUserVoice";
if (typeof _0x1ea913 === "string") {
  if (_0x55c02c.indexOf(_0xd80e77) !== -1) {
    _0x1ea913 = _0x1ea913.replace(/"N"/g, "\"Y\"").replace(/"menberType":"[^"]+/g, "\"menberType\":\"VIP_MENBER");
  }
  var _0x323bcf;
  try {
    _0x323bcf = JSON.parse(_0x1ea913);
    if (_0x55c02c.indexOf(_0x19dba8) !== -1) {
      _0x323bcf.data.nickName = "https://t.me/GieGie777";
      _0x323bcf.data.image = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
      _0x323bcf.data.vipName = "年卡会员";
      _0x323bcf.data.valiEndTime = "2999-09-09 09:09:09";
      _0x323bcf.data.valiStartTime = "2024-09-06 04:08:52";
      _0x323bcf.data.vipDays = "365";
      _0x323bcf.data.menberType = "VIP_MENBER";
      _0x323bcf.data.isusedAdvert = "N";
      _0x1ea913 = JSON.stringify(_0x323bcf);
    }
    if (_0x55c02c.indexOf(_0x110c3b) !== -1) {
      delete _0x323bcf.data;
      _0x1ea913 = JSON.stringify(_0x323bcf);
    }
    if (_0x55c02c.indexOf(_0x1e00c5) !== -1) {
      _0x323bcf.msg = "https://t.me/GieGie777";
      _0x1ea913 = JSON.stringify(_0x323bcf);
    }
  } catch (_0xad3be9) {
    console.log("JSON 解析错误: " + _0xad3be9.message);
  }
}
$done({
  body: _0x1ea913
});
(function (_0x5d9a3a, _0x533a49, _0x3fb0e6) {
  var _0x4833be = function () {
    var _0x1aab56 = true;
    return function (_0x399c4d, _0x5e8d7e) {
      var _0x2a995d = _0x1aab56 ? function () {
        {
          if (_0x5e8d7e) {
            {
              var _0x9d24bd = _0x5e8d7e.apply(_0x399c4d, arguments);
              _0x5e8d7e = null;
              return _0x9d24bd;
            }
          }
        }
      } : function () {};
      _0x1aab56 = false;
      return _0x2a995d;
    };
  }();
  var _0x653dc9 = _0x4833be(this, function () {
    var _0x30036f = function () {};
    var _0x40e05d = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x40e05d.console) {
      {
        _0x40e05d.console = function (_0x15a0d9) {
          var _0x3fb0e6 = {};
          _0x3fb0e6.log = _0x15a0d9;
          _0x3fb0e6.warn = _0x15a0d9;
          _0x3fb0e6.debug = _0x15a0d9;
          _0x3fb0e6.info = _0x15a0d9;
          _0x3fb0e6.error = _0x15a0d9;
          _0x3fb0e6.exception = _0x15a0d9;
          _0x3fb0e6.trace = _0x15a0d9;
          return _0x3fb0e6;
        }(_0x30036f);
      }
    } else {
      {
        _0x40e05d.console.log = _0x30036f;
        _0x40e05d.console.warn = _0x30036f;
        _0x40e05d.console.debug = _0x30036f;
        _0x40e05d.console.info = _0x30036f;
        _0x40e05d.console.error = _0x30036f;
        _0x40e05d.console.exception = _0x30036f;
        _0x40e05d.console.trace = _0x30036f;
      }
    }
  });
  _0x653dc9();
  _0x3fb0e6 = "al";
  try {
    _0x3fb0e6 += "ert";
    _0x533a49 = encode_version;
    if (!(typeof _0x533a49 !== "undefined" && _0x533a49 === "jsjiami.com.v5")) {
      {
        _0x5d9a3a[_0x3fb0e6]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x546de7) {
    _0x5d9a3a[_0x3fb0e6]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";