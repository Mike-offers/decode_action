//Sat May 24 2025 15:51:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(() => {
  var f = {
    kiagQ: "/asy/trailer.m3u8",
    mByrL: function (B, C) {
      return B !== C;
    },
    DnyNE: function (B, C) {
      return B !== C;
    },
    XPJWi: "QHYZP",
    rNZng: "&userId=1",
    tKLDe: "&accessToken=",
    oVxOF: function (B, C) {
      return B(C);
    },
    RgMFW: function (B, C) {
      return B === C;
    },
    vgVDh: "UsfbU",
    qQORK: "SagzT",
    UEWlq: "cYKBI",
    UhQDD: "PDuvR",
    yOTEZ: "DGbpR",
    rDgPE: "mFRML",
    wOTcU: "&device=",
    eVuJj: function (B, C) {
      return B(C);
    },
    SXLpx: function (B, C) {
      return B == C;
    },
    uwaUU: "eefjs",
    nLFtg: "fBycy",
    NYrOb: "/info?bookId",
    khlaF: "bCvbO",
    zkjIt: function (B, C) {
      return B(C);
    },
    YKWIa: function (B, C) {
      return B === C;
    },
    epjKy: "IjAvV",
    eAIhQ: function (B, C) {
      return B === C;
    },
    wTEoW: "/shorter/user/getUser",
    uhYPC: "https://t.me/GieGie777",
    iUWEi: "/resource/getWindowNotice",
    GYWrY: "/user/getVipPvg",
    YBPFW: "video/search",
    sblRq: "/shorter/video/longvideoinfo/info",
    HDWRm: "eATbz",
    NUgpA: "oUUtI",
    abPtC: function (B, C) {
      return B === C;
    },
    EvmKo: "dGisC",
    QOtLH: "tXuLB",
    gPCYM: "视频已解锁",
    FEZpH: "userVip\":1",
    KAynI: "trailer.m3u8",
    kySNm: "/shorter/video/home/newlist",
    ESSlB: "tryseeSecond\":9999",
    voTLg: "isProducer\":1"
  };
  if ("undefined" == typeof $response) {
    {
      var g = $request.url;
      if (g.includes("/info?bookId")) {
        {
          var h = g.replace(/(&userId=\d+)/, "&userId=1").replace(/(&accessToken=\w+)/, "&accessToken=").replace(/(&device=[a-zA-Z0-9-]+)/, "&device=");
          var j = {
            url: h
          };
          $done(j);
        }
      } else {
        $done({});
      }
    }
  } else {
    var k;
    var m = $response.body;
    var p = $request.url;
    try {
      {
        k = JSON.parse(m);
      }
    } catch (E) {
      {
        k = null;
      }
    }
    if (k && (p.includes("/shorter/user/getUser") && (k.data.vipPvgList.forEach(function (G) {
      return G.flag = 1;
    }), k.data.nickname = "https://t.me/GieGie777", k.data.userVip = 2, k.data.expiredTime = 0, m = JSON.stringify(k)), p.includes("/adInfoPageList") && (k.data.forEach(function (G) {
      {
        return G.isDelete = 1;
      }
    }), k.data = [], m = JSON.stringify(k)), p.includes("/resource/getWindowNotice") && (delete k.data, m = JSON.stringify(k)), p.includes("tabIconConfigView/list") && (k.data[3] && (k.data[3].status = 0), m = JSON.stringify(k)), p.includes("/user/getVipPvg") && (k.data.vipPvgList.forEach(function (G) {
      return G.flag = 1;
    }), m = JSON.stringify(k)), p.includes("video/search") && (k.data.list.forEach(function (G) {
      {
        G.buyDelete = 1;
        G.userVip = 1;
        G.videoBuy = null;
        G.isPurchase = 1;
      }
    }), m = JSON.stringify(k)), p.includes("/shorter/video/longvideoinfo/info"))) {
      if (k.data && 1 !== k.data.isTrysee) {
        {
          var q = k.data.cosUrl;
          var v = k.data.videoImage;
          var w = k.data.videoUrlPre;
          var x = "";
          if (q) {
            {
              var y = q.split(",");
              q = y[0].trim();
            }
          }
          if (w && null !== w) {
            {
              var z = v ? v.split("/")[0] : "";
              x = "".concat(q, "/").concat(z, "/asy/trailer.m3u8");
            }
          } else {
            if (v) {
              {
                var A = v.split("/")[0];
                x = "".concat(q, "/").concat(A, "/asy/trailer.m3u8");
              }
            }
          }
          !function (J, K) {
            {
              var L;
              var M = K;
              var N = {
                "open-url": M,
                url: M
              };
              (null !== (L = this.$notify) && undefined !== L ? L : $notification.post)(J, "", "点击跳转系统浏览器播放", N);
            }
          }("视频已解锁", x);
          m = m.replace(/try.m3u8/g, "trailer.m3u8").replace(/isPurchase":\d/g, "isPurchase\":1").replace(/userVip":\d/g, "userVip\":1").replace(/tryVideoUrl/g, x);
        }
      } else {
        m = m.replace(/try.m3u8/g, "trailer.m3u8").replace(/isPurchase":\d/g, "isPurchase\":1").replace(/userVip":\d/g, "userVip\":1").replace(/tryVideoUrl/g, "videoUrl");
      }
    }
    p.includes("/shorter/video/home/newlist") && (m = m.replace(/userVip":\d/g, "userVip\":1").replace(/tryseeSecond":\d/g, "tryseeSecond\":9999").replace(/isProducer":\d/g, "isProducer\":1"));
    $done({
      body: m
    });
  }
})();