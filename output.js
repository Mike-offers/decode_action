//Wed Jan 29 2025 09:58:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var _0x2aec7f = $response.body;
var _0x2b00f3 = $request.url;
var _0xe4d83d = JSON.parse(_0x2aec7f);
if (_0x2b00f3.indexOf("/users/show_current.json") != -1) {
  _0x2aec7f = $response.body.replace(/\"meiyan_vip\"\:\d+/g, "\"meiyan_vip\":1").replace(/\"xiuxiu_vip\"\:\d+/g, "\"xiuxiu_vip\":1").replace(/\"screen_name\"\:\".*?\"/g, "\"screen_name\":\"已破解\"");
} else {
  if (_0x2b00f3.indexOf("/vip/user_info.json") != -1) {
    _0xe4d83d.response.status = 1;
    _0xe4d83d.response.ad_vip_type = 4;
    _0xe4d83d.response.agreement_status = 1;
    _0xe4d83d.response.expire_time = "2030-01-01 00:00:00";
    _0xe4d83d.response.period_type = 3;
    _0xe4d83d.response.product_type = 3;
    _0xe4d83d.response.permission = [];
    _0xe4d83d.response.discount_status = 64;
    _0xe4d83d.response.agreement_status = 2;
    _0xe4d83d.response.type = 3;
    _0xe4d83d.response.expire_date = "2030-01-01";
    _0x2aec7f = JSON.stringify(_0xe4d83d);
  } else {
    if (_0x2b00f3.indexOf("/common/check_device_login_pwd") != -1) {
      _0x2aec7f = $response.body.replace(/\"meiyan_vip\"\:\d+/g, "\"meiyan_vip\":1").replace(/\"xiuxiu_vip\"\:\d+/g, "\"xiuxiu_vip\":1").replace(/\"screen_name\"\:\".*?\"/g, "\"screen_name\":\"已破解\"");
    } else {
      if (_0x2b00f3.indexOf("/vip/user_center.json") != -1) {
        _0xe4d83d.response.user_info.status = 1;
        _0xe4d83d.response.user_info.period_type = 3;
        _0xe4d83d.response.user_info.discount_status = 64;
        _0xe4d83d.response.user_info.agreement_status = 2;
        _0xe4d83d.response.user_info.product_type = 3;
        _0xe4d83d.response.user_info.expire_date = "2030-01-01";
        _0xe4d83d.response.status = 1;
        _0xe4d83d.response.period_type = 3;
        _0xe4d83d.response.discount_status = 64;
        _0xe4d83d.response.agreement_status = 2;
        _0xe4d83d.response.product_type = 3;
        _0xe4d83d.response.expire_date = "2030-01-01";
        _0xe4d83d.response.is_promotional_offer_available = true;
        _0x2aec7f = JSON.stringify(_0xe4d83d);
      }
    }
  }
}
$done({
  body: _0x2aec7f
});
(function (_0x32cc1a, _0x399c55, _0x53fa57) {
  var _0x52a63c = function () {
    {
      var _0x46e3ff = true;
      return function (_0x4c3b07, _0x3bb293) {
        var _0x38aec7 = _0x46e3ff ? function () {
          {
            if (_0x3bb293) {
              var _0x31022a = _0x3bb293.apply(_0x4c3b07, arguments);
              _0x3bb293 = null;
              return _0x31022a;
            }
          }
        } : function () {};
        _0x46e3ff = false;
        return _0x38aec7;
      };
    }
  }();
  var _0x128d55 = _0x52a63c(this, function () {
    {
      var _0x3e7f01 = function () {};
      var _0x225925 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x225925.console) {
        _0x225925.console = function (_0x23723c) {
          var _0x53fa57 = {};
          _0x53fa57.log = _0x23723c;
          _0x53fa57.warn = _0x23723c;
          _0x53fa57.debug = _0x23723c;
          _0x53fa57.info = _0x23723c;
          _0x53fa57.error = _0x23723c;
          _0x53fa57.exception = _0x23723c;
          _0x53fa57.trace = _0x23723c;
          return _0x53fa57;
        }(_0x3e7f01);
      } else {
        _0x225925.console.log = _0x3e7f01;
        _0x225925.console.warn = _0x3e7f01;
        _0x225925.console.debug = _0x3e7f01;
        _0x225925.console.info = _0x3e7f01;
        _0x225925.console.error = _0x3e7f01;
        _0x225925.console.exception = _0x3e7f01;
        _0x225925.console.trace = _0x3e7f01;
      }
    }
  });
  _0x128d55();
  _0x53fa57 = "al";
  try {
    _0x53fa57 += "ert";
    _0x399c55 = encode_version;
    if (!(typeof _0x399c55 !== "undefined" && _0x399c55 === "jsjiami.com.v5")) {
      {
        _0x32cc1a[_0x53fa57]("ɾ��版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x5c66ba) {
    {
      _0x32cc1a[_0x53fa57]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";