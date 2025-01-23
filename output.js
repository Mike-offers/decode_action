//Thu Jan 23 2025 05:53:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
if (typeof $rocket !== "undefined") {
  function getBoxJSValue(_0x42bfeb) {
    var _0x3b33c6 = function () {
      var _0x56f343 = true;
      return function (_0x2b0236, _0xfef56a) {
        var _0x452d85 = _0x56f343 ? function () {
          if (_0xfef56a) {
            var _0x189676 = _0xfef56a.apply(_0x2b0236, arguments);
            _0xfef56a = null;
            return _0x189676;
          }
        } : function () {};
        _0x56f343 = false;
        return _0x452d85;
      };
    }();
    var _0x572056 = _0x3b33c6(this, function () {
      var _0x4a9303 = function () {
        return "dev";
      };
      var _0x265a13 = function () {
        return "window";
      };
      var _0x34e324 = function () {
        var _0x52dc3d = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
        return !_0x52dc3d.test(_0x4a9303.toString());
      };
      var _0x264493 = function () {
        var _0x563d7d = new RegExp("(\\\\[x|u](\\w){2,4})+");
        return _0x563d7d.test(_0x265a13.toString());
      };
      var _0x8dcc91 = function (_0x2103bc) {
        var _0x2bdbba = 0 >> 1 + NaN;
        if (_0x2103bc.indexOf("i" === _0x2bdbba)) {
          _0x37d0d8(_0x2103bc);
        }
      };
      var _0x37d0d8 = function (_0x27a1c2) {
        var _0x8f0637 = 3 >> 1 + NaN;
        if (_0x27a1c2.indexOf("true"[3]) !== _0x8f0637) {
          _0x8dcc91(_0x27a1c2);
        }
      };
      if (!_0x34e324()) {
        if (!_0x264493()) {
          _0x8dcc91("indеxOf");
        } else {
          _0x8dcc91("indexOf");
        }
      } else {
        _0x8dcc91("indеxOf");
      }
    });
    _0x572056();
    try {
      {
        if (typeof $persistentStore !== "undefined" && typeof $persistentStore.read === "function") {
          {
            const _0x3f5570 = $persistentStore.read(_0x42bfeb);
            console.log("🔍成功读取BoxJS值（$persistentStore）：" + _0x42bfeb + "=" + _0x3f5570);
            return _0x3f5570;
          }
        } else {
          if (typeof $prefs !== "undefined" && typeof $prefs.valueForKey === "function") {
            const _0x4f5653 = $prefs.valueForKey(_0x42bfeb);
            console.log("🔍成功读取BoxJS值（$prefs）：" + _0x42bfeb + "=" + _0x4f5653);
            return _0x4f5653;
          } else {
            console.log("⚠️ 无法检测到可用的 BoxJS 环境！");
          }
        }
      }
    } catch (_0x109fe3) {
      {
        console.log("⚠️读取BoxJS配置失败：" + _0x109fe3.message);
      }
    }
    return null;
  }
  const scriptSwitch = getBoxJSValue("ddm.app_switch");
  const isScriptEnabled = scriptSwitch === "true" || scriptSwitch === true;
  console.log("BoxJS配置读取：ddm.app_switch=" + scriptSwitch);
  if (!isScriptEnabled) {
    console.log("⛔️ BoxJS 配置禁用脚本，脚本停止运行");
    $notification.post("⚠️ 脚本异常已终止运行", "检测到脚本开关未开启", "📌 【Boxjs 配置指南】\n1️⃣ 配置地址： https://github.com/chavyleung/scripts\n2️⃣ 订阅链接： https://raw.githubusercontent.com/chxm1023/Script_X/main/ddm1023.boxjs.json\n\n📋 【使用说明】\n1️⃣ 添加订阅链接到 Boxjs\n2️⃣ 启用 [脚本开关] 并保存设置\n\n⚠️ 【注意事项】\n- 开关用于防止非法售卖脚本\n- 仅供学习体验，请勿传播或滥用\n- 建议 24 小时内删除，避免不必要问题\n\n🙏 感谢理解与支持！");
    $done();
  }
}
var ddm = JSON.parse($response.body);
Object.assign(ddm.data, {
  status: "normal",
  endTime: "2099-09-09 09:09:09",
  type: "sk_year_vip"
});
$done({
  body: JSON.stringify(ddm)
});
(function (_0x586355, _0x1d9e79, _0x176237) {
  _0x176237 = "al";
  try {
    {
      _0x176237 += "ert";
      _0x1d9e79 = encode_version;
      if (!(typeof _0x1d9e79 !== "undefined" && _0x1d9e79 === "jsjiami.com.v5")) {
        _0x586355[_0x176237]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x9195de) {
    _0x586355[_0x176237]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";