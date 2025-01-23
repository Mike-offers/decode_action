//Thu Jan 23 2025 06:49:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
if (typeof $rocket !== "undefined") {
  function getBoxJSValue(_0x487145) {
    try {
      if (typeof $persistentStore !== "undefined" && typeof $persistentStore.read === "function") {
        {
          const _0x3254cf = $persistentStore.read(_0x487145);
          console.log("🔍成功读取BoxJS值（$persistentStore）：" + _0x487145 + "=" + _0x3254cf);
          return _0x3254cf;
        }
      } else {
        if (typeof $prefs !== "undefined" && typeof $prefs.valueForKey === "function") {
          const _0x252830 = $prefs.valueForKey(_0x487145);
          console.log("🔍成功读取BoxJS值（$prefs）：" + _0x487145 + "=" + _0x252830);
          return _0x252830;
        } else {
          console.log("⚠️ 无法检测到可用的 BoxJS 环境！");
        }
      }
    } catch (_0x461256) {
      console.log("⚠️读取BoxJS配置失败：" + _0x461256.message);
    }
    return null;
  }
  const scriptSwitch = getBoxJSValue("ddm.app_switch");
  const isScriptEnabled = scriptSwitch === "true" || scriptSwitch === true;
  console.log("BoxJS配置读取：ddm.app_switch=" + scriptSwitch);
  if (!isScriptEnabled) {
    console.log("⛔️ BoxJS 配置禁用脚本，脚本停止运行");
    $notification.post("⛔️脚本异常已终止运行⛔️", "🚨 检测到脚本开关未打开", "↘️点击访问频道解决问题↙️\nhttps://t.me/chxm1023/7\n配置Boxjs➡️订阅链接➡️打开开关即可使用");
    $done();
  }
}
var chxm1023 = JSON.parse($response.body);
chxm1023.entitlements = [{
  entitlement: "premium",
  granted_at: "2025-01-01T00:00:00.000Z",
  expires_at: "2099-09-09T09:09:09.000Z",
  vendor_sku: "droom.sleepIfUCanFree.premium.yearlyPromo.1",
  vendor: "appstore",
  will_renew: false,
  active_intro_offer_type: "free_trial"
}];
$done({
  body: JSON.stringify(chxm1023)
});
(function (_0x238cec, _0x500a59, _0x27c92e) {
  var _0x577838 = function () {
    var _0x22bcdb = true;
    return function (_0x15ab17, _0x141e38) {
      var _0x405780 = _0x22bcdb ? function () {
        if (_0x141e38) {
          var _0x1c888f = _0x141e38.apply(_0x15ab17, arguments);
          _0x141e38 = null;
          return _0x1c888f;
        }
      } : function () {};
      _0x22bcdb = false;
      return _0x405780;
    };
  }();
  var _0x34742a = _0x577838(this, function () {
    var _0x231fd0 = function () {
      return "dev";
    };
    var _0x4f680a = function () {
      return "window";
    };
    var _0x5dd881 = function () {
      var _0x550fbc = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !_0x550fbc.test(_0x231fd0.toString());
    };
    var _0x18d5c9 = function () {
      var _0x4ce2f1 = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return _0x4ce2f1.test(_0x4f680a.toString());
    };
    var _0x333808 = function (_0x432180) {
      var _0x2ab90b = 0 >> 1 + NaN;
      if (_0x432180.indexOf("i" === _0x2ab90b)) {
        _0x991246(_0x432180);
      }
    };
    var _0x991246 = function (_0x981158) {
      var _0x57b080 = 3 >> 1 + NaN;
      if (_0x981158.indexOf("true"[3]) !== _0x57b080) {
        _0x333808(_0x981158);
      }
    };
    if (!_0x5dd881()) {
      if (!_0x18d5c9()) {
        _0x333808("indеxOf");
      } else {
        _0x333808("indexOf");
      }
    } else {
      _0x333808("indеxOf");
    }
  });
  _0x34742a();
  _0x27c92e = "al";
  try {
    _0x27c92e += "ert";
    _0x500a59 = encode_version;
    if (!(typeof _0x500a59 !== "undefined" && _0x500a59 === "jsjiami.com.v5")) {
      {
        _0x238cec[_0x27c92e]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x2423cf) {
    _0x238cec[_0x27c92e]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";