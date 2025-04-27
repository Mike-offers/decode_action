//Sun Apr 27 2025 04:26:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(() => {
  var b = {
    fGVRw: function (B, C) {
      return B != C;
    },
    YlYNv: function (B, C, D, E) {
      return B(C, D, E);
    },
    hEsMA: "解锁成功 当前离会员到期还有 ",
    FuNKy: function (B, C, D) {
      return B(C, D);
    },
    OCGOI: function (B, C) {
      return B === C;
    },
    JtDam: "SOSoo",
    jVYjV: "undefined",
    mpCYt: function (B, C) {
      return B(C);
    },
    yyngD: "tJoOO",
    bsiKs: function (B, C) {
      return B != C;
    },
    KPuTb: function (B, C) {
      return B(C);
    },
    YgMIk: function (B, C) {
      return B === C;
    },
    SAMpA: "DREJr",
    eOINH: "dhKZT",
    ThGjk: "2025-04-19",
    TCrdk: function (B, C) {
      return B - C;
    },
    Wmdes: function (B, C) {
      return B / C;
    },
    VclRu: function (B, C) {
      return B(C);
    },
    PXukP: function (B, C) {
      return B > C;
    },
    mXKYg: "HxefR",
    qumgd: "脚本作者baby&Tayloreft",
    EkTiQ: "baby作者频道 https://t.me/Jsforbaby\nYQC频道https://t.me/yqc_123",
    VzvKZ: "data",
    JreGg: function (B, C) {
      return B !== C;
    },
    UyCTI: "oLXoN",
    fJUhs: function (B, C) {
      return B(C);
    },
    nEfBB: function (B, C) {
      return B === C;
    },
    wrikm: "JceQp",
    KsxcS: "pnPkf",
    Oefka: function (B, C) {
      return B(C);
    }
  };
  var c = "baby_notify_flag";
  var g = new Date("2025-04-19");
  var h = new Date();
  var j = Math.max(0, 30 - Math.floor((h - g) / 86400000));
  var k = function (B) {
    {
      return "undefined" != typeof $prefs ? $prefs.valueForKey(B) : "undefined" != typeof $persistentStore ? $persistentStore.read(B) : null;
    }
  };
  var l = function (B, C) {
    {
      return "undefined" != typeof $prefs ? $prefs.setValueForKey(B, C) : "undefined" != typeof $persistentStore ? $persistentStore.write(B, C) : null;
    }
  };
  var m = parseInt(k(c) || "0");
  var q = Date.now();
  if (q - m > 86400000) {
    {
      var v = "解锁成功 当前离会员到期还有 ".concat(j, " 天");
      !function (C, D, E) {
        "undefined" != typeof $notify ? $notify(C, D, E) : "undefined" != typeof $notification && $notification.post(C, D, E);
      }(v, "脚本作者baby&Tayloreft", "baby作者频道 https://t.me/Jsforbaby\nYQC频道https://t.me/yqc_123");
      l(q.toString(), c);
    }
  }
  var w;
  var x = new URLSearchParams($request.body || "");
  var z = decodeURIComponent(x.get("data") || "");
  try {
    {
      var A;
      w = JSON.parse(z);
      null !== (A = w.Message) && undefined !== A && A.MovieID ? (w.Message.Token = "EA74C1DCF08E4A828E175912E0EF00D5", w.Message.MemberID = 20086091, x.set("data", encodeURIComponent(JSON.stringify(w))), $done({
        body: x.toString()
      })) : $done({});
    }
  } catch (D) {
    {
      $done({});
    }
  }
})();