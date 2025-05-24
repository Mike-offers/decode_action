//Sat May 24 2025 03:25:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(async () => {
  const _0x1c2e7b = "https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/evn.js",
    _0x13d660 = "https://cdn.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Utils.js",
    _0x289002 = $request?.["headers"] || {},
    _0x916dd8 = _0x289002["user-agent"] || _0x289002["User-Agent"] || "";
  let _0x33b010 = "未知应用",
    _0x71e991 = "🆓Eric专属脚本";
  if (_0x916dd8.includes("Fizzt")) _0x33b010 = "快连加速器VPN";else {
    if (_0x916dd8.includes("Banana")) _0x33b010 = "香蕉加速器VPN";else _0x916dd8.includes("RacingShield") && (_0x33b010 = "赛盾加速器VPN");
  }
  _0x71e991 += " " + _0x33b010;
  _0x33b010 === "未知应用" && (typeof $notify !== "undefined" ? $notify(_0x71e991, "提示", "🆓解密脚本 未知应用，开始！") : console.log("🆓解密脚本 未知应用，开始！"));
  try {
    {
      const _0x2030b6 = await _0xf1734d(),
        _0x354816 = new _0x2030b6(_0x71e991);
      let _0x4b0f7a = $response?.["body"] || "";
      try {
        typeof _0x4b0f7a === "string" && (_0x4b0f7a = JSON.parse(_0x4b0f7a));
      } catch {
        return _0x354816.done({});
      }
      let _0x549b22,
        _0x1045d9,
        _0x25e2e8,
        _0xc4b246 = false;
      switch (_0x33b010) {
        case "快连加速器VPN":
          _0xc4b246 = _0x4b0f7a.prd_code_flg === 200;
          _0x549b22 = _0x4b0f7a.prd_result_flg?.["prd_link_url_flg"];
          _0x1045d9 = _0x25e2e8 = "929af8c0ac9dc557";
          break;
        case "香蕉加速器VPN":
          _0xc4b246 = _0x4b0f7a.bio_code_tron === 200;
          _0x549b22 = _0x4b0f7a.bio_result_tron?.["bio_link_url_tron"];
          _0x1045d9 = _0x25e2e8 = "817a7baa5c74b982";
          break;
        case "赛盾加速器VPN":
          _0xc4b246 = _0x4b0f7a.code === 200;
          _0x549b22 = _0x4b0f7a.result?.["url"];
          _0x1045d9 = _0x25e2e8 = "TmPrPhkOf8by0cvx";
          break;
        default:
          return _0x354816.done({});
      }
      if (!_0xc4b246) return _0x354816.done({});
      try {
        const _0x333b5b = await _0x1e6d94(_0x354816),
          _0x52d10d = _0x333b5b.createCryptoJS();
        if (!_0x52d10d) throw new Error("CryptoJS 初始化失败");
        if (!_0x549b22) throw new Error("未找到加密 URL");
        const _0x28ee94 = decodeURIComponent(_0x549b22),
          _0x3fc22b = _0x465ad2(_0x28ee94, _0x52d10d.enc.Utf8.parse(_0x1045d9), _0x52d10d.enc.Utf8.parse(_0x25e2e8), _0x52d10d, _0x354816);
        _0x354816.msg(_0x354816.name, "✅Eric解密成功", _0x3fc22b);
      } catch (_0x519e32) {
        _0x354816.msg(_0x354816.name, "❎解密失败", _0x519e32.message);
      } finally {
        _0x354816.done({});
      }
    }
  } catch {}
  function _0x465ad2(_0x2b306b, _0x168abf, _0x5b3652, _0x3ff587, _0x12fc41) {
    try {
      const _0x1d162c = _0x3ff587.AES.decrypt(_0x2b306b, _0x168abf, {
        "iv": _0x5b3652,
        "mode": _0x3ff587.mode.CBC,
        "padding": _0x3ff587.pad.Pkcs7
      });
      return _0x1d162c.toString(_0x3ff587.enc.Utf8);
    } catch {
      throw new Error("AES 解密失败");
    }
  }
  async function _0x1e6d94(_0xf5f486) {
    try {
      const _0x8b1c34 = _0xf5f486.getdata("Utils_Code");
      if (_0x8b1c34) {
        {
          const _0x68411f = _0x28b146(_0x8b1c34, _0xf5f486);
          if (_0x68411f) return _0xf5f486.log("✅Utils 缓存加载成功"), _0x68411f;
        }
      }
      const _0x2ca228 = await _0x39896a(_0x13d660, _0xf5f486);
      if (_0x2ca228) {
        {
          _0xf5f486.setdata(_0x2ca228, "Utils_Code");
          const _0x46c597 = _0x28b146(_0x2ca228, _0xf5f486);
          if (_0x46c597) return _0xf5f486.log("✅Utils 下载并缓存成功"), _0x46c597;
        }
      }
    } catch {}
    throw new Error("❎Utils 加载失败");
  }
  function _0x28b146(_0xa9a4f3, _0x65b7c5) {
    try {
      eval(_0xa9a4f3);
      return typeof creatUtils === "function" ? creatUtils() : null;
    } catch {
      return null;
    }
  }
  async function _0xf1734d() {
    {
      let _0x29b5b8 = $persistentStore?.["read"]("Eric_Env_Code") || "";
      if (_0x29b5b8) {
        const _0x1ffcf8 = _0x27cf68(_0x29b5b8);
        if (_0x1ffcf8) {
          console.log("✅Env 缓存加载成功");
          return _0x1ffcf8;
        }
      }
      const _0x16321f = await _0x39896a(_0x1c2e7b);
      if (_0x16321f) {
        $persistentStore?.["write"](_0x16321f, "Eric_Env_Code");
        const _0x231eed = _0x27cf68(_0x16321f);
        if (_0x231eed) return console.log("✅Env 下载并缓存成功"), _0x231eed;
      }
      throw new Error("❎Env 加载失败");
    }
  }
  function _0x27cf68(_0x478d78) {
    try {
      eval(_0x478d78);
      return typeof Env === "function" ? Env : null;
    } catch {
      return null;
    }
  }
  function _0x39896a(_0x154b5d, _0x4ea006) {
    return new Promise((_0x39e637, _0x58e60b) => {
      if (typeof $httpClient !== "undefined") $httpClient.get({
        "url": _0x154b5d
      }, (_0xe9a5b5, _0x36f086, _0x1b148c) => {
        {
          if (!_0xe9a5b5 && _0x36f086.status === 200) _0x39e637(_0x1b148c);else _0x58e60b(_0xe9a5b5 || new Error("状态码 " + _0x36f086.status));
        }
      });else {
        if (typeof $task !== "undefined") {
          $task.fetch({
            "url": _0x154b5d
          }).then(_0x8af430 => _0x39e637(_0x8af430.body), _0x58e60b);
        } else {
          if (typeof fetch !== "undefined") fetch(_0x154b5d).then(_0x4258f6 => _0x4258f6.ok ? _0x4258f6.text() : Promise.reject(new Error("状态码 " + _0x4258f6.status))).then(_0x39e637).catch(_0x58e60b);else {
            _0x58e60b("不支持的运行环境");
          }
        }
      }
    });
  }
})();