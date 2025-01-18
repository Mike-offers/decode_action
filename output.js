//Sat Jan 18 2025 05:52:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var _0x138855 = $response.body;
var _0x17aa32 = $request.url;
var _0x11fd13 = JSON.parse(_0x138855);
const _0xa1f48f = "/platform-ns/v1.0/member/detail";
const _0x2ea268 = "/live-ns/index/user_video_async";
const _0x5bb9cb = "/lottery-ns/";
if (_0x17aa32.indexOf(_0xa1f48f) != -1) {
  _0x11fd13.data.nick_name = "https://t.me/GieGie777";
  _0x11fd13.data.head_img = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
  _0x11fd13.data.vip = 50;
  _0x11fd13.data.total_account = 999880;
  _0x138855 = JSON.stringify(_0x11fd13);
}
if (_0x17aa32.indexOf(_0x2ea268) != -1) {
  for (var _0x4176a3 = 0; _0x4176a3 < _0x11fd13.data.viewer.list.length; _0x4176a3++) {
    _0x11fd13.data.viewer.list[_0x4176a3].officer = 1;
    _0x11fd13.data.viewer.list[_0x4176a3].guardType = 1;
    _0x11fd13.data.viewer.list[_0x4176a3].user_level = 50;
  }
  _0x11fd13.data.is_live_pay = 0;
  delete _0x11fd13.data.h5Plugins;
  _0x138855 = JSON.stringify(_0x11fd13);
}
if (_0x17aa32.indexOf(_0x5bb9cb) != -1) {
  delete _0x11fd13.data;
  _0x138855 = JSON.stringify(_0x11fd13);
}
$done({
  body: _0x138855
});
(function (_0xd4b59a, _0x4360f8, _0x19da2f) {
  var _0x1b943c = function () {
    var _0x4d737b = true;
    return function (_0x320252, _0x2c1024) {
      var _0x317edf = _0x4d737b ? function () {
        if (_0x2c1024) {
          var _0x35da55 = _0x2c1024.apply(_0x320252, arguments);
          _0x2c1024 = null;
          return _0x35da55;
        }
      } : function () {};
      _0x4d737b = false;
      return _0x317edf;
    };
  }();
  var _0x521c8a = _0x1b943c(this, function () {
    var _0x264948 = function () {};
    var _0x3d07fe = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x3d07fe.console) {
      {
        _0x3d07fe.console = function (_0x1f9e50) {
          {
            var _0x19da2f = {};
            _0x19da2f.log = _0x1f9e50;
            _0x19da2f.warn = _0x1f9e50;
            _0x19da2f.debug = _0x1f9e50;
            _0x19da2f.info = _0x1f9e50;
            _0x19da2f.error = _0x1f9e50;
            _0x19da2f.exception = _0x1f9e50;
            _0x19da2f.trace = _0x1f9e50;
            return _0x19da2f;
          }
        }(_0x264948);
      }
    } else {
      _0x3d07fe.console.log = _0x264948;
      _0x3d07fe.console.warn = _0x264948;
      _0x3d07fe.console.debug = _0x264948;
      _0x3d07fe.console.info = _0x264948;
      _0x3d07fe.console.error = _0x264948;
      _0x3d07fe.console.exception = _0x264948;
      _0x3d07fe.console.trace = _0x264948;
    }
  });
  _0x521c8a();
  _0x19da2f = "al";
  try {
    {
      _0x19da2f += "ert";
      _0x4360f8 = encode_version;
      if (!(typeof _0x4360f8 !== "undefined" && _0x4360f8 === "jsjiami.com.v5")) {
        {
          _0xd4b59a[_0x19da2f]("删除版本号，js会定期弹窗，还请支持我们的工作");
        }
      }
    }
  } catch (_0x865cc3) {
    _0xd4b59a[_0x19da2f]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";