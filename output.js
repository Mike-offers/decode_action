//Wed Jan 15 2025 13:23:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x1c915e = JSON.parse($response.body);
var _0x5f08f0 = {
  productId: "vcus.subs.month12.func00.lev00.ver1",
  quantity: 1,
  originalTransactionId: "730000978197460",
  transactionId: "730000978197460",
  purchaseDateMs: "1665344803000",
  expiresDateMs: "4092647115000",
  promotionalOfferId: "",
  autoRenewStatus: false,
  offerCodeRefName: "",
  gracePeriodExpiresDateMs: "",
  isTrialPeriod: false,
  isInIntroOfferPeriod: false,
  originalPurchaseDateMs: "1665344805000",
  inAppOwnershipType: "PURCHASED",
  productType: "",
  status: 1
};
var _0x3ee51e = {
  latestReceiptInfo: [_0x5f08f0],
  inApp: []
};
var _0x3769d3 = {
  code: 0,
  data: _0x3ee51e,
  message: "success",
  update: ""
};
_0x1c915e = _0x3769d3;
var _0x365ac7 = {
  body: JSON.stringify(_0x1c915e)
};
$done(_0x365ac7);