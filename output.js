//Sat Jan 25 2025 16:51:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var a0x;
a0x = JSON.parse($response.body);
a0x.data.ssvip.isPaidVip = true;
a0x.data.ssvip.isVip = true;
a0x.data.ssvip.vipExpiringDays = 9999;
a0x.data.ssvip.isTempVip = true;
a0x.data.svip.isPaidVip = true;
a0x.data.svip.isVip = true;
a0x.data.svip.vipExpiringDays = 9999;
a0x.data.svip.isTempVip = true;
a0x.data.vip.isPaidVip = true;
a0x.data.vip.isVip = true;
a0x.data.vip.vipExpiringDays = 9999;
a0x.data.vip.isTempVip = true;
a0x.data.trainingCampVip.isPaidVip = true;
a0x.data.trainingCampVip.isVip = true;
a0x.data.trainingCampVip.vipExpiringDays = 9999;
a0x.data.trainingCampVip.isTempVip = true;
a0x.data.vipTime = "2099-09-09 02:20:13";
a0x.data.vipType = "1";
a0x.data.pureSviptime = "2099-09-09 02:20:13";
a0x.data.svipTime = "2099-09-09 02:20:13";
a0x.data.svipType = "1";
a0x.data.ssvipTime = "2099-09-09 02:20:13";
$done({
  body: JSON.stringify(a0x)
});