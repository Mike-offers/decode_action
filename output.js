//Tue Apr 29 2025 03:52:10 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
if ($request.url.indexOf("/mobile/track/pay/") != -1) {
  var _0x4a98c3 = $request.headers;
  _0x4a98c3.cookie = "domain=.ximalaya.com; path=/; channel=ios-b1; impl=com.ximalaya.tingLite; 1&_device=iPhone&21E133FB-5E47-1234-9999-B1450B7DE132&3.0.34;1&_token=543756639&391C6620340C0B7B9E9903A7426D7CAF1604B3FFAD38FE0350C7F67D0D93DA2B104A7B535516113M53FAA3438222DBB_";
  $done({
    headers: _0x4a98c3
  });
}
if ($request.url.indexOf("/fmobile-track/fmobile/track/playpage/") != -1) {
  var _0x4a98c3 = $request.headers;
  _0x4a98c3.cookie = "domain=.ximalaya.com; path=/; channel=ios-b1; impl=com.ximalaya.tingLite; 1&_device=iPhone&21E133FB-5E47-1234-9999-B1450B7DE132&3.0.34;1&_token=543756639&391C6620340C0B7B9E9903A7426D7CAF1604B3FFAD38FE0350C7F67D0D93DA2B104A7B535516113M53FAA3438222DBB_";
  $done({
    headers: _0x4a98c3
  });
} else {
  if ($request.url.indexOf("/fmobile-user/homePage/") != -1) {
    var _0x1f971b = JSON.parse($response.body);
    _0x1f971b.vipViewInfo.expireDays = 365;
    _0x1f971b.vipViewInfo.vipStatus = 2;
    _0x1f971b.vipViewInfo.expireDate = 32493834549000;
    _0x1f971b.nickname = "https://t.me/GieGie777";
    _0x1f971b.mobileMiddleLogo = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
    _0x1f971b.mobileSmallLogo = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
    _0x1f971b.mobileLargeLogo = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
    _0x1f971b.vipResourceInfo.buttonContent = "免费提供❤️";
    delete _0x1f971b.vipResourceInfo.url;
    delete _0x1f971b.limitResourceInfo;
    var _0xf07c25 = JSON.stringify(_0x1f971b);
    $done({
      body: _0xf07c25
    });
  } else {
    if ($request.url.indexOf("/pizza-category/mypage/operation/") != -1) {
      var _0x4026e5 = JSON.parse($response.body);
      delete _0x4026e5.data;
      var _0x27782c = JSON.stringify(_0x4026e5);
      $done({
        body: _0x27782c
      });
    } else {
      $done({});
    }
  }
}
(function (_0x43d500, _0x1e3802, _0xb4eed1) {
  var _0x2f89aa = function () {
    var _0x10c2b3 = true;
    return function (_0xeec0eb, _0xe6e9db) {
      var _0x2a04cd = _0x10c2b3 ? function () {
        if (_0xe6e9db) {
          var _0x13656e = _0xe6e9db.apply(_0xeec0eb, arguments);
          _0xe6e9db = null;
          return _0x13656e;
        }
      } : function () {};
      _0x10c2b3 = false;
      return _0x2a04cd;
    };
  }();
  var _0x59dd6f = _0x2f89aa(this, function () {
    {
      var _0x356dbc = function () {};
      var _0x2b59c6 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x2b59c6.console) {
        {
          _0x2b59c6.console = function (_0x603f4e) {
            var _0xb4eed1 = {};
            _0xb4eed1.log = _0x603f4e;
            _0xb4eed1.warn = _0x603f4e;
            _0xb4eed1.debug = _0x603f4e;
            _0xb4eed1.info = _0x603f4e;
            _0xb4eed1.error = _0x603f4e;
            _0xb4eed1.exception = _0x603f4e;
            _0xb4eed1.trace = _0x603f4e;
            return _0xb4eed1;
          }(_0x356dbc);
        }
      } else {
        _0x2b59c6.console.log = _0x356dbc;
        _0x2b59c6.console.warn = _0x356dbc;
        _0x2b59c6.console.debug = _0x356dbc;
        _0x2b59c6.console.info = _0x356dbc;
        _0x2b59c6.console.error = _0x356dbc;
        _0x2b59c6.console.exception = _0x356dbc;
        _0x2b59c6.console.trace = _0x356dbc;
      }
    }
  });
  _0x59dd6f();
  _0xb4eed1 = "al";
  try {
    _0xb4eed1 += "ert";
    _0x1e3802 = encode_version;
    if (!(typeof _0x1e3802 !== "undefined" && _0x1e3802 === "jsjiami.com.v5")) {
      _0x43d500[_0xb4eed1]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x528244) {
    _0x43d500[_0xb4eed1]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";