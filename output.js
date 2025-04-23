//Wed Apr 23 2025 05:16:37 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
var _0x2d8937 = $response.body;
var _0xfe032c = $request.url;
const _0x346d21 = "/video/";
const _0x65bdd5 = "/v4akapp/video/detail";
const _0x265631 = "/v4akapp/user/index";
if (typeof _0x2d8937 === "string") {
  if (_0xfe032c.indexOf(_0x346d21) !== -1) {
    _0x2d8937 = _0x2d8937.replace(/is_vip":\d/g, "is_vip\":0").replace(/nextchapter/g, "chapterinfo");
  }
  var _0x38c87e;
  try {
    _0x38c87e = JSON.parse(_0x2d8937);
    if (_0xfe032c.indexOf(_0x65bdd5) !== -1) {
      _0x38c87e.data.member.vip_enddate = 9999999999999;
      _0x38c87e.data.member.is_vip = 1;
      _0x38c87e.data.member.egold = 88888;
      _0x38c87e.data.buy.saleprice = "0";
      _0x38c87e.data.buy.egold_name = "";
      _0x38c87e.data.nextchapter.is_vip = 0;
      _0x38c87e.data.chapterinfo.is_vip = 0;
      _0x38c87e.data.prevchapter.is_vip = 0;
      _0x2d8937 = JSON.stringify(_0x38c87e);
    }
    if (_0xfe032c.indexOf(_0x265631) !== -1) {
      _0x38c87e.data.vip_day = 36500;
      _0x38c87e.data.uuid = "https://t.me/GieGie777";
      _0x38c87e.data.is_vip = 1;
      _0x2d8937 = JSON.stringify(_0x38c87e);
    }
  } catch (_0x5625be) {
    console.log("JSON 解析错误: " + _0x5625be.message);
  }
}
$done({
  body: _0x2d8937
});
(function (_0x1a646e, _0x3a7a9c, _0x490068) {
  var _0x3445d8 = function () {
    var _0x2ae846 = true;
    return function (_0x292f44, _0x5aa07d) {
      var _0x1be478 = _0x2ae846 ? function () {
        {
          if (_0x5aa07d) {
            var _0xde5f5e = _0x5aa07d.apply(_0x292f44, arguments);
            _0x5aa07d = null;
            return _0xde5f5e;
          }
        }
      } : function () {};
      _0x2ae846 = false;
      return _0x1be478;
    };
  }();
  var _0x1ce05f = _0x3445d8(this, function () {
    {
      var _0x122852 = function () {};
      var _0x5037db = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x5037db.console) {
        {
          _0x5037db.console = function (_0x377228) {
            {
              var _0x490068 = {};
              _0x490068.log = _0x377228;
              _0x490068.warn = _0x377228;
              _0x490068.debug = _0x377228;
              _0x490068.info = _0x377228;
              _0x490068.error = _0x377228;
              _0x490068.exception = _0x377228;
              _0x490068.trace = _0x377228;
              return _0x490068;
            }
          }(_0x122852);
        }
      } else {
        {
          _0x5037db.console.log = _0x122852;
          _0x5037db.console.warn = _0x122852;
          _0x5037db.console.debug = _0x122852;
          _0x5037db.console.info = _0x122852;
          _0x5037db.console.error = _0x122852;
          _0x5037db.console.exception = _0x122852;
          _0x5037db.console.trace = _0x122852;
        }
      }
    }
  });
  _0x1ce05f();
  _0x490068 = "al";
  try {
    {
      _0x490068 += "ert";
      _0x3a7a9c = encode_version;
      if (!(typeof _0x3a7a9c !== "undefined" && _0x3a7a9c === "jsjiami.com.v5")) {
        _0x1a646e[_0x490068]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x12cb97) {
    {
      _0x1a646e[_0x490068]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";