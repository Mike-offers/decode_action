//Fri Jan 24 2025 04:58:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
if (typeof $rocket !== "undefined") {
  function getBoxJSValue(_0xbc8dbf) {
    try {
      if (typeof $persistentStore !== "undefined" && typeof $persistentStore.read === "function") {
        {
          const _0x3810bc = $persistentStore.read(_0xbc8dbf);
          console.log("🔍 成功读取 BoxJS 值（$persistentStore）：" + _0xbc8dbf + " = " + _0x3810bc);
          return _0x3810bc;
        }
      } else {
        if (typeof $prefs !== "undefined" && typeof $prefs.valueForKey === "function") {
          const _0x1c0726 = $prefs.valueForKey(_0xbc8dbf);
          console.log("? �ɹ���ȡ BoxJS ֵ��$prefs����" + _0xbc8dbf + " = " + _0x1c0726);
          return _0x1c0726;
        } else {
          {
            console.log("⚠️ 无法检测到可用的 BoxJS 环境！");
          }
        }
      }
    } catch (_0x16f453) {
      console.log("?? ��ȡ BoxJS ����ʧ�ܣ�" + _0x16f453.message);
    }
    return null;
  }
  const scriptSwitch = getBoxJSValue("ddm.app_switch");
  const isScriptEnabled = scriptSwitch === "true" || scriptSwitch === true;
  console.log("BoxJS 配置读取：ddm.app_switch = " + scriptSwitch);
  if (!isScriptEnabled) {
    console.log("?? BoxJS ���ý��ýű����ű�ֹͣ����");
    $notification.post("?? �ű��쳣����ֹ����", "检测到脚本开关未开启", "📌 【Boxjs 配置指南】\n1️⃣ 配置地址： https://github.com/chavyleung/scripts\n2️⃣ 订阅链接： https://raw.githubusercontent.com/chxm1023/Script_X/main/ddm1023.boxjs.json\n\n📋 【使用说明】\n1️⃣ 添加订阅链接到 Boxjs\n2️⃣ 启用 [脚本开关] 并保存设置\n\n⚠️ 【注意事项】\n- 开关用于防止非法售卖脚本\n- 仅供学习体验，请勿传播或滥用\n- 建议 24 小时内删除，避免不必要问题\n\n🙏 感谢理解与支持！");
    $done();
  }
}
var ddm = JSON.parse($response.body);
Object.assign(ddm, {
  plan: "year",
  active: 1,
  premium_access: "2099-09-09T09:09:09.000Z",
  currency: "CNY",
  subscribed: 1
});
$done({
  body: JSON.stringify(ddm)
});
(function (_0x10fe10, _0xd81c04, _0xf9e908) {
  _0xf9e908 = "al";
  try {
    {
      _0xf9e908 += "ert";
      _0xd81c04 = encode_version;
      if (!(typeof _0xd81c04 !== "undefined" && _0xd81c04 === "jsjiami.com.v5")) {
        _0x10fe10[_0xf9e908]("ɾ��版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x381bf9) {
    _0x10fe10[_0xf9e908]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";