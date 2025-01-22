//Wed Jan 22 2025 11:25:43 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
if ($request.url.includes("/v2/user/profile")) {
  let _0x40d66f = JSON.parse($response.body);
  Object.assign(_0x40d66f.data, {
    nickname: "t.me/GieGie777",
    headImg: "https://zdimg.lifeweek.com.cn/app/20240614/17183119665002415.jpg"
  });
  $done({
    body: JSON.stringify(_0x40d66f)
  });
} else {
  if ($request.url.includes("/v2/purchase/vip/verification")) {
    let _0x367965 = JSON.parse($response.body);
    Object.assign(_0x367965.data, {
      isValid: 1,
      expiredTs: 32493834549,
      vipType: 1
    });
    $done({
      body: JSON.stringify(_0x367965)
    });
  }
}
(function (_0x3b3a40, _0x8339b3, _0x4d71fe) {
  var _0x475c54 = function () {
    {
      var _0x1a729f = true;
      return function (_0x32d4ab, _0x5555cd) {
        var _0x26cbdc = _0x1a729f ? function () {
          {
            if (_0x5555cd) {
              var _0x5a7f0c = _0x5555cd.apply(_0x32d4ab, arguments);
              _0x5555cd = null;
              return _0x5a7f0c;
            }
          }
        } : function () {};
        _0x1a729f = false;
        return _0x26cbdc;
      };
    }
  }();
  var _0x3d84db = _0x475c54(this, function () {
    var _0x2f324b = function () {};
    var _0x1dfe5f = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x1dfe5f.console) {
      _0x1dfe5f.console = function (_0x1ced45) {
        {
          var _0x4d71fe = {};
          _0x4d71fe.log = _0x1ced45;
          _0x4d71fe.warn = _0x1ced45;
          _0x4d71fe.debug = _0x1ced45;
          _0x4d71fe.info = _0x1ced45;
          _0x4d71fe.error = _0x1ced45;
          _0x4d71fe.exception = _0x1ced45;
          _0x4d71fe.trace = _0x1ced45;
          return _0x4d71fe;
        }
      }(_0x2f324b);
    } else {
      _0x1dfe5f.console.log = _0x2f324b;
      _0x1dfe5f.console.warn = _0x2f324b;
      _0x1dfe5f.console.debug = _0x2f324b;
      _0x1dfe5f.console.info = _0x2f324b;
      _0x1dfe5f.console.error = _0x2f324b;
      _0x1dfe5f.console.exception = _0x2f324b;
      _0x1dfe5f.console.trace = _0x2f324b;
    }
  });
  _0x3d84db();
  _0x4d71fe = "al";
  try {
    _0x4d71fe += "ert";
    _0x8339b3 = encode_version;
    if (!(typeof _0x8339b3 !== "undefined" && _0x8339b3 === "jsjiami.com.v5")) {
      {
        _0x3b3a40[_0x4d71fe]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x18ab81) {
    {
      _0x3b3a40[_0x4d71fe]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";