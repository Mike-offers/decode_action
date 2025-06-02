//Mon Jun 02 2025 08:52:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
if ($request.url.indexOf("/mobile/track/pay/") != -1) {
  var _0x428fb2 = $request.headers;
  _0x428fb2.cookie = "domain=.ximalaya.com; path=/; channel=ios-b1; impl=com.ximalaya.tingLite; 1&_device=iPhone&21E133FB-4321-2234-9999-B1450B7DE132&3.0.34;1&_token=546091383&09CCE8E0340C0258A2ABC8FFEA8E29664606EE3ABBA057B5D77BAD2E17B244DDF354AB18294020M53FAA34863E4107_";
  $done({
    headers: _0x428fb2
  });
}
if ($request.url.indexOf("/fmobile-track/fmobile/track/playpage/") != -1) {
  var _0x428fb2 = $request.headers;
  _0x428fb2.cookie = "domain=.ximalaya.com; path=/; channel=ios-b1; impl=com.ximalaya.tingLite; 1&_device=iPhone&21E133FB-4321-2234-9999-B1450B7DE132&3.0.34;1&_token=546091383&09CCE8E0340C0258A2ABC8FFEA8E29664606EE3ABBA057B5D77BAD2E17B244DDF354AB18294020M53FAA34863E4107_";
  $done({
    headers: _0x428fb2
  });
} else {
  if ($request.url.indexOf("/fmobile-user/homePage/") != -1) {
    var _0x2d61bf = JSON.parse($response.body);
    _0x2d61bf.vipViewInfo.expireDays = 365;
    _0x2d61bf.vipViewInfo.vipStatus = 2;
    _0x2d61bf.vipViewInfo.expireDate = 32493834549000;
    _0x2d61bf.nickname = "https://t.me/GieGie777";
    _0x2d61bf.mobileMiddleLogo = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
    _0x2d61bf.mobileSmallLogo = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
    _0x2d61bf.mobileLargeLogo = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
    _0x2d61bf.vipResourceInfo.buttonContent = "免费提供❤️";
    delete _0x2d61bf.vipResourceInfo.url;
    delete _0x2d61bf.limitResourceInfo;
    var _0x58b156 = JSON.stringify(_0x2d61bf);
    $done({
      body: _0x58b156
    });
  } else {
    if ($request.url.indexOf("/pizza-category/mypage/operation/") != -1) {
      var _0x2c3f1a = JSON.parse($response.body);
      delete _0x2c3f1a.data;
      var _0x567ff3 = JSON.stringify(_0x2c3f1a);
      $done({
        body: _0x567ff3
      });
    } else {
      $done({});
    }
  }
}
(function (_0x5aeee6, _0xb07c1f, _0x2aff80) {
  var _0x2ad7bb = function () {
    var _0x2bef40 = true;
    return function (_0x433bb9, _0x44deb9) {
      var _0x4f07f9 = _0x2bef40 ? function () {
        {
          if (_0x44deb9) {
            {
              var _0x14434c = _0x44deb9.apply(_0x433bb9, arguments);
              _0x44deb9 = null;
              return _0x14434c;
            }
          }
        }
      } : function () {};
      _0x2bef40 = false;
      return _0x4f07f9;
    };
  }();
  var _0x13e6ae = _0x2ad7bb(this, function () {
    var _0x57c711 = function () {};
    var _0x5f09d6 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x5f09d6.console) {
      {
        _0x5f09d6.console = function (_0x4b6a65) {
          {
            var _0x2aff80 = {};
            _0x2aff80.log = _0x4b6a65;
            _0x2aff80.warn = _0x4b6a65;
            _0x2aff80.debug = _0x4b6a65;
            _0x2aff80.info = _0x4b6a65;
            _0x2aff80.error = _0x4b6a65;
            _0x2aff80.exception = _0x4b6a65;
            _0x2aff80.trace = _0x4b6a65;
            return _0x2aff80;
          }
        }(_0x57c711);
      }
    } else {
      _0x5f09d6.console.log = _0x57c711;
      _0x5f09d6.console.warn = _0x57c711;
      _0x5f09d6.console.debug = _0x57c711;
      _0x5f09d6.console.info = _0x57c711;
      _0x5f09d6.console.error = _0x57c711;
      _0x5f09d6.console.exception = _0x57c711;
      _0x5f09d6.console.trace = _0x57c711;
    }
  });
  _0x13e6ae();
  _0x2aff80 = "al";
  try {
    {
      _0x2aff80 += "ert";
      _0xb07c1f = encode_version;
      if (!(typeof _0xb07c1f !== "undefined" && _0xb07c1f === "jsjiami.com.v5")) {
        _0x5aeee6[_0x2aff80]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x1b8522) {
    _0x5aeee6[_0x2aff80]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";