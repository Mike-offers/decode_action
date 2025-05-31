//Sat May 31 2025 21:21:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("樱桃plus", {
  logLevel: "debug"
});
(() => {
  function b(s) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (v) {
      {
        return typeof v;
      }
    } : function (v) {
      {
        return v && "function" == typeof Symbol && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
      }
    };
    return b(s);
  }
  function c() {
    "use strict";

    c = function () {
      {
        return B;
      }
    };
    var A;
    var B = {
      wrap: M
    };
    var C = Object.prototype;
    var D = C.hasOwnProperty;
    var F = Object.defineProperty || function (ac, ad, ae) {
      {
        ac[ad] = ae.value;
      }
    };
    var G = "function" == typeof Symbol ? Symbol : {};
    var H = G.iterator || "@@iterator";
    var I = G.asyncIterator || "@@asyncIterator";
    var J = G.toStringTag || "@@toStringTag";
    function K(ac, ad, ae) {
      {
        var af = {
          value: ae,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(ac, ad, af);
        return ac[ad];
      }
    }
    try {
      {
        K({}, "");
      }
    } catch (ad) {
      K = function (ae, af, ag) {
        {
          return ae[af] = ag;
        }
      };
    }
    function M(af, ag, ah, ai) {
      {
        var ak = ag && ag.prototype instanceof X ? ag : X;
        var al = Object.create(ak.prototype);
        var am = new aa(ai || []);
        F(al, "_invoke", {
          value: a6(af, ah, am)
        });
        return al;
      }
    }
    function N(af, ag, ah) {
      {
        try {
          return {
            type: "normal",
            arg: af.call(ag, ah)
          };
        } catch (an) {
          {
            var ak = {
              type: "throw",
              arg: an
            };
            return ak;
          }
        }
      }
    }
    var P = "suspendedStart";
    var Q = "suspendedYield";
    var R = "executing";
    var V = "completed";
    var W = {};
    function X() {}
    function Y() {}
    function Z() {}
    var a0 = {};
    K(a0, H, function () {
      {
        return this;
      }
    });
    var a1 = Object.getPrototypeOf;
    var a2 = a1 && a1(a1(ab([])));
    a2 && a2 !== C && D.call(a2, H) && (a0 = a2);
    Z.prototype = X.prototype = Object.create(a0);
    var a3 = Z.prototype;
    function a4(af) {
      var ag = {
        FKkBS: function (ah, ai) {
          return ah(ai);
        },
        iznZL: "4|0|1|3|5|2",
        vLHmX: function (ah, ai) {
          return ah === ai;
        },
        sRvgj: function (ah, ai, aj) {
          return ah(ai, aj);
        },
        aBtOX: "throw",
        DLiTZ: function (ah, ai) {
          return ah !== ai;
        },
        daTEJ: function (ah, ai) {
          return ah + ai;
        },
        hknoS: function (ah, ai) {
          return ah === ai;
        },
        gUEKf: "iaufa",
        ADnjj: function (ah, ai) {
          return ah === ai;
        },
        mtgjI: "jHdSS"
      };
      {
        ["next", "throw", "return"].forEach(function (ah) {
          var ai = {
            YFpFI: function (aj, ak) {
              return aj(ak);
            },
            RPHPb: "4|0|1|3|5|2",
            YowIQ: function (aj, ak) {
              return aj === ak;
            },
            CKaFJ: function (aj, ak, al) {
              return aj(ak, al);
            },
            xXBZN: "throw",
            sezEn: function (aj, ak) {
              return aj !== ak;
            },
            sYnqc: function (aj, ak) {
              return aj + ak;
            },
            KLvCI: function (aj, ak) {
              return aj === ak;
            },
            NEDev: "iaufa"
          };
          {
            K(af, ah, function (ak) {
              var al = {
                xiPLM: "4|0|1|3|5|2",
                eGJCM: function (am, an) {
                  return am === an;
                },
                TjBbo: "return",
                jlcfn: function (am, an, ao) {
                  return am(an, ao);
                },
                jJJYm: "throw",
                lAJrM: function (am, an) {
                  return am !== an;
                },
                cASfr: function (am, an) {
                  return am + an;
                },
                nDDBo: "The iterator does not provide a '",
                haAuO: "' method",
                zEkut: function (am, an, ao, ap) {
                  return am(an, ao, ap);
                },
                YhQmZ: "next",
                Nhyyr: function (am, an) {
                  return am === an;
                }
              };
              {
                return this._invoke(ah, ak);
              }
            });
          }
        });
      }
    }
    function a5(af, ag) {
      {
        function aj(ak, al, am, an) {
          {
            var ap = N(af[ak], af, al);
            if ("throw" !== ap.type) {
              {
                var aq = ap.arg;
                var ar = aq.value;
                return ar && "object" == b(ar) && D.call(ar, "__await") ? ag.resolve(ar.__await).then(function (at) {
                  {
                    aj("next", at, am, an);
                  }
                }, function (at) {
                  {
                    aj("throw", at, am, an);
                  }
                }) : ag.resolve(ar).then(function (at) {
                  {
                    aq.value = at;
                    am(aq);
                  }
                }, function (at) {
                  {
                    return aj("throw", at, am, an);
                  }
                });
              }
            }
            an(ap.arg);
          }
        }
        var ai;
        F(this, "_invoke", {
          value: function (ak, al) {
            {
              function an() {
                {
                  return new ag(function (aq, ar) {
                    aj(ak, al, aq, ar);
                  });
                }
              }
              return ai = ai ? ai.then(an, an) : an();
            }
          }
        });
      }
    }
    function a6(af, ag, ah) {
      {
        var aj = P;
        return function (ak, al) {
          if (aj === R) {
            throw Error("Generator is already running");
          }
          if (aj === V) {
            {
              if ("throw" === ak) {
                throw al;
              }
              var am = {
                value: A,
                done: true
              };
              return am;
            }
          }
          for (ah.method = ak, ah.arg = al;;) {
            {
              var an = ah.delegate;
              if (an) {
                {
                  var ao = a7(an, ah);
                  if (ao) {
                    {
                      if (ao === W) {
                        continue;
                      }
                      return ao;
                    }
                  }
                }
              }
              if ("next" === ah.method) {
                ah.sent = ah._sent = ah.arg;
              } else {
                if ("throw" === ah.method) {
                  {
                    if (aj === P) {
                      throw aj = V, ah.arg;
                    }
                    ah.dispatchException(ah.arg);
                  }
                } else {
                  "return" === ah.method && ah.abrupt("return", ah.arg);
                }
              }
              aj = R;
              var ap = N(af, ag, ah);
              if ("normal" === ap.type) {
                {
                  if (aj = ah.done ? V : Q, ap.arg === W) {
                    continue;
                  }
                  var aq = {
                    value: ap.arg,
                    done: ah.done
                  };
                  return aq;
                }
              }
              "throw" === ap.type && (aj = V, ah.method = "throw", ah.arg = ap.arg);
            }
          }
        };
      }
    }
    function a7(af, ag) {
      {
        var al = ag.method;
        var am = af.iterator[al];
        if (am === A) {
          ag.delegate = null;
          "throw" === al && af.iterator.return && (ag.method = "return", ag.arg = A, a7(af, ag), "throw" === ag.method) || "return" !== al && (ag.method = "throw", ag.arg = new TypeError("The iterator does not provide a '" + al + "' method"));
          return W;
        }
        var ak = N(am, af.iterator, ag.arg);
        if ("throw" === ak.type) {
          ag.method = "throw";
          ag.arg = ak.arg;
          ag.delegate = null;
          return W;
        }
        var aj = ak.arg;
        return aj ? aj.done ? (ag[af.resultName] = aj.value, ag.next = af.nextLoc, "return" !== ag.method && (ag.method = "next", ag.arg = A), ag.delegate = null, W) : aj : (ag.method = "throw", ag.arg = new TypeError("iterator result is not an object"), ag.delegate = null, W);
      }
    }
    function a8(af) {
      {
        var ai = {
          tryLoc: af[0]
        };
        1 in af && (ai.catchLoc = af[1]);
        2 in af && (ai.finallyLoc = af[2], ai.afterLoc = af[3]);
        this.tryEntries.push(ai);
      }
    }
    function a9(af) {
      {
        var ag = af.completion || {};
        ag.type = "normal";
        delete ag.arg;
        af.completion = ag;
      }
    }
    function aa(af) {
      {
        var ag = {
          tryLoc: "root"
        };
        this.tryEntries = [ag];
        af.forEach(a8, this);
        this.reset(true);
      }
    }
    function ab(af) {
      {
        if (af || "" === af) {
          {
            var ah = af[H];
            if (ah) {
              return ah.call(af);
            }
            if ("function" == typeof af.next) {
              return af;
            }
            if (!isNaN(af.length)) {
              {
                var ai = -1;
                var aj = function am() {
                  {
                    for (; ++ai < af.length;) {
                      if (D.call(af, ai)) {
                        am.value = af[ai];
                        am.done = false;
                        return am;
                      }
                    }
                    am.value = A;
                    am.done = true;
                    return am;
                  }
                };
                return aj.next = aj;
              }
            }
          }
        }
        throw new TypeError(b(af) + " is not iterable");
      }
    }
    Y.prototype = Z;
    F(a3, "constructor", {
      value: Z,
      configurable: true
    });
    F(Z, "constructor", {
      value: Y,
      configurable: true
    });
    Y.displayName = K(Z, J, "GeneratorFunction");
    B.isGeneratorFunction = function (af) {
      {
        var ag = "function" == typeof af && af.constructor;
        return !!ag && (ag === Y || "GeneratorFunction" === (ag.displayName || ag.name));
      }
    };
    B.mark = function (af) {
      Object.setPrototypeOf ? Object.setPrototypeOf(af, Z) : (af.__proto__ = Z, K(af, J, "GeneratorFunction"));
      af.prototype = Object.create(a3);
      return af;
    };
    B.awrap = function (af) {
      {
        var ai = {
          __await: af
        };
        return ai;
      }
    };
    a4(a5.prototype);
    K(a5.prototype, I, function () {
      {
        return this;
      }
    });
    B.AsyncIterator = a5;
    B.async = function (af, ag, ah, ai, aj) {
      {
        undefined === aj && (aj = Promise);
        var al = new a5(M(af, ag, ah, ai), aj);
        return B.isGeneratorFunction(ag) ? al : al.next().then(function (an) {
          {
            return an.done ? an.value : al.next();
          }
        });
      }
    };
    a4(a3);
    K(a3, J, "Generator");
    K(a3, H, function () {
      {
        return this;
      }
    });
    K(a3, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    B.keys = function (af) {
      {
        var ag = Object(af);
        var ah = [];
        for (var ai in ag) ah.push(ai);
        ah.reverse();
        return function aj() {
          {
            for (; ah.length;) {
              {
                var al = ah.pop();
                if (al in ag) {
                  aj.value = al;
                  aj.done = false;
                  return aj;
                }
              }
            }
            aj.done = true;
            return aj;
          }
        };
      }
    };
    B.values = ab;
    aa.prototype = {
      constructor: aa,
      reset: function (af) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = A, this.done = false, this.delegate = null, this.method = "next", this.arg = A, this.tryEntries.forEach(a9), !af) {
            for (var ah in this) "t" === ah.charAt(0) && D.call(this, ah) && !isNaN(+ah.slice(1)) && (this[ah] = A);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var af = this.tryEntries[0].completion;
          if ("throw" === af.type) {
            throw af.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (af) {
        {
          if (this.done) {
            throw af;
          }
          var ah = this;
          function an(ao, ap) {
            {
              ak.type = "throw";
              ak.arg = af;
              ah.next = ao;
              ap && (ah.method = "next", ah.arg = A);
              return !!ap;
            }
          }
          for (var ai = this.tryEntries.length - 1; ai >= 0; --ai) {
            {
              var aj = this.tryEntries[ai];
              var ak = aj.completion;
              if ("root" === aj.tryLoc) {
                return an("end");
              }
              if (aj.tryLoc <= this.prev) {
                {
                  var al = D.call(aj, "catchLoc");
                  var am = D.call(aj, "finallyLoc");
                  if (al && am) {
                    {
                      if (this.prev < aj.catchLoc) {
                        return an(aj.catchLoc, true);
                      }
                      if (this.prev < aj.finallyLoc) {
                        return an(aj.finallyLoc);
                      }
                    }
                  } else {
                    if (al) {
                      {
                        if (this.prev < aj.catchLoc) {
                          return an(aj.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!am) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aj.finallyLoc) {
                          return an(aj.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (af, ag) {
        {
          for (var ai = this.tryEntries.length - 1; ai >= 0; --ai) {
            {
              var aj = this.tryEntries[ai];
              if (aj.tryLoc <= this.prev && D.call(aj, "finallyLoc") && this.prev < aj.finallyLoc) {
                {
                  var ak = aj;
                  break;
                }
              }
            }
          }
          ak && ("break" === af || "continue" === af) && ak.tryLoc <= ag && ag <= ak.finallyLoc && (ak = null);
          var al = ak ? ak.completion : {};
          al.type = af;
          al.arg = ag;
          return ak ? (this.method = "next", this.next = ak.finallyLoc, W) : this.complete(al);
        }
      },
      complete: function (af, ag) {
        {
          if ("throw" === af.type) {
            throw af.arg;
          }
          "break" === af.type || "continue" === af.type ? this.next = af.arg : "return" === af.type ? (this.rval = this.arg = af.arg, this.method = "return", this.next = "end") : "normal" === af.type && ag && (this.next = ag);
          return W;
        }
      },
      finish: function (af) {
        {
          for (var ag = this.tryEntries.length - 1; ag >= 0; --ag) {
            {
              var ah = this.tryEntries[ag];
              if (ah.finallyLoc === af) {
                this.complete(ah.completion, ah.afterLoc);
                a9(ah);
                return W;
              }
            }
          }
        }
      },
      catch: function (af) {
        {
          for (var ag = this.tryEntries.length - 1; ag >= 0; --ag) {
            {
              var ah = this.tryEntries[ag];
              if (ah.tryLoc === af) {
                {
                  var ai = ah.completion;
                  if ("throw" === ai.type) {
                    {
                      var aj = ai.arg;
                      a9(ah);
                    }
                  }
                  return aj;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (af, ag, ah) {
        {
          this.delegate = {
            iterator: ab(af),
            resultName: ag,
            nextLoc: ah
          };
          "next" === this.method && (this.arg = A);
          return W;
        }
      }
    };
    return B;
  }
  function d(s, v, w, x, y, z, A) {
    try {
      var B = s[z](A);
      var C = B.value;
    } catch (D) {
      return void w(D);
    }
    B.done ? v(C) : Promise.resolve(C).then(x, y);
  }
  function e(s) {
    return function () {
      var w = this;
      var x = arguments;
      return new Promise(function (y, z) {
        var B = s.apply(w, x);
        function C(E) {
          d(B, y, z, C, D, "next", E);
        }
        function D(E) {
          d(B, y, z, C, D, "throw", E);
        }
        C(undefined);
      });
    };
  }
  var f = $response.body;
  var g = "12345677654321";
  var h = "0123456789";
  var i = "解锁成功 欢迎加入作者频道";
  var j = "脚本作者baby";
  var k = "baby作者频道 https://t.me/Jsforbaby";
  var l = {
    read: function (s) {
      return "undefined" != typeof $prefs ? $prefs.valueForKey(s) : "undefined" != typeof $persistentStore ? $persistentStore.read(s) : null;
    },
    write: function (s, u) {
      return "undefined" != typeof $prefs ? $prefs.setValueForKey(s, u) : "undefined" != typeof $persistentStore ? $persistentStore.write(s, u) : null;
    }
  };
  function m() {
    var s = new Date().toISOString().split("T")[0];
    l.read("last_notify_date") !== s && ($.msg(i, j, k), l.write(s, "last_notify_date"));
  }
  function n(s, u, v, w) {
    var x = p(u, w);
    var y = w.enc.Utf8.parse(v);
    var z = w.TripleDES.decrypt({
      ciphertext: w.enc.Base64.parse(s)
    }, x, {
      iv: y,
      mode: w.mode.CBC,
      padding: w.pad.Pkcs7
    });
    return z.toString(w.enc.Utf8);
  }
  function o(s, u, v, w) {
    var x = p(u, w);
    var y = w.enc.Utf8.parse(v);
    var z = w.TripleDES.encrypt(s, x, {
      iv: y,
      mode: w.mode.CBC,
      padding: w.pad.Pkcs7
    });
    return z.ciphertext.toString(w.enc.Base64);
  }
  function p(s, u) {
    for (var v = u.enc.Utf8.parse(s), w = v.words; w.length < 6;) {
      w.push(0);
    }
    return u.lib.WordArray.create(w, 24);
  }
  function q() {
    return r.apply(this, arguments);
  }
  function r() {
    r = e(c().mark(function u() {
      var w;
      return c().wrap(function x(y) {
        for (;;) {
          switch (y.prev = y.next) {
            case 0:
              if (w = $.getdata("Utils_Code") || "", !w || !w.length) {
                y.next = 4;
                break;
              }
              eval(w);
              return y.abrupt("return", creatUtils());
            case 4:
              return y.abrupt("return", new Promise(function (z) {
                $.getScript("https://cdn.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Utils.js").then(function (B) {
                  $.setdata(B, "Utils_Code");
                  eval(B);
                  z(creatUtils());
                });
              }));
            case 5:
            case "end":
              return y.stop();
          }
        }
      }, u);
    }));
    return r.apply(this, arguments);
  }
  e(c().mark(function s() {
    var v;
    var w;
    var x;
    var y;
    var z;
    return c().wrap(function (A) {
      for (;;) {
        switch (A.prev = A.next) {
          case 0:
            A.prev = 0;
            A.next = 3;
            return q();
          case 3:
            v = A.sent;
            w = v.createCryptoJS();
            x = $request.url;
            y = n(f, g, h, w);
            x.includes("/index/getUserAppInfo") && (y = y.replace(/"vipView"\s*:\s*\d+/g, "\"vipView\":1").replace(/"nickName"\s*:\s*"[^"]*"/g, "\"nickName\":\"baby\"").replace(/"money"\s*:\s*\d+/g, "\"money\":999").replace(/"canViewCount"\s*:\s*\d+/g, "\"canViewCount\":9099").replace(/"vipTimes"\s*:\s*\[[^\]]*]/g, "\"vipTimes\":[999,59,59]").replace(/"hy_etime"\s*:\s*"[^"]*"/g, "\"hy_etime\":\"2999-12-29 18:00:00\""), m());
            x.includes("/member/getMoney") && (y = y.replace(/"hy_money"\s*:\s*\d+/g, "\"hy_money\":999").replace(/"hy_voucher"\s*:\s*\d+/g, "\"hy_voucher\":999"));
            x.includes("/newVideo/leaseVideo") && (y = y.replace(/"errno"\s*:\s*\d+/g, "\"errno\":0").replace(/"errmsg"\s*:\s*"[^"]*"/g, "\"errmsg\":\"\""));
            z = o(y, g, h, w);
            $.done({
              body: z
            });
            A.next = 18;
            break;
          case 14:
            var B = {
              body: f
            };
            A.prev = 14;
            A.t0 = A.catch(0);
            $.logErr(A.t0);
            $.done(B);
          case 18:
          case "end":
            return A.stop();
        }
      }
    }, s, null, [[0, 14]]);
  }))();
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, a) => {
        s.call(this, t, (t, s, r) => {
          t ? a(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const a = this.getdata(t);
      if (a) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, a) => e(a));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        a = a ? a.replace(/\n/g, "").trim() : a;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [i, o] = a.split("@");
        const n = {
          url: `http://${o}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": i,
            Accept: "*/*"
          },
          timeout: r
        };
        this.post(n, (t, e, a) => s(a));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const a = !s && this.fs.existsSync(e);
        if (!s && !a) {
          return {};
        }
        {
          const a = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(a));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const a = !s && this.fs.existsSync(e);
        const r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of a) if (r = Object(r)[t], undefined === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t);
        const r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, a, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e);
        const i = this.getval(a);
        const o = a ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), a);
        } catch (e) {
          const i = {};
          this.lodash_set(i, r, t);
          s = this.setval(JSON.stringify(i), a);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: a,
              statusCode: r,
              headers: i,
              rawBody: o
            } = t;
            const n = s.decode(o, this.encoding);
            e(null, {
              status: a,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: a,
              response: r
            } = t;
            e(a, r, r && s.decode(r.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: r,
            ...i
          } = t;
          this.got[s](r, i).then(t => {
            const {
              statusCode: s,
              statusCode: r,
              headers: i,
              rawBody: o
            } = t;
            const n = a.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: r
            } = t;
            e(s, r, r && a.decode(r.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let a = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let a = t[s];
        null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", a = "", r) {
      const i = t => {
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let e = t.url || t.openUrl || t["open-url"];
                  return {
                    url: e
                  };
                }
              case "Loon":
                {
                  let e = t.openUrl || t.url || t["open-url"];
                  let s = t.mediaUrl || t["media-url"];
                  return {
                    openUrl: e,
                    mediaUrl: s
                  };
                }
              case "Quantumult X":
                {
                  let e = t["open-url"] || t.url || t.openUrl;
                  let s = t["media-url"] || t.mediaUrl;
                  let a = t["update-pasteboard"] || t.updatePasteboard;
                  return {
                    "open-url": e,
                    "media-url": s,
                    "update-pasteboard": a
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, a, i(r));
            break;
          case "Quantumult X":
            $notify(e, s, a, i(r));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        a && t.push(a);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime();
      const s = (e - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}