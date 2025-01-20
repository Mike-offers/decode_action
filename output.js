//Mon Jan 20 2025 08:31:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var body = $response.body;
var obj = JSON.parse(body);
obj = {
  msg: "success",
  data: [{
    due_time: "2099-09-09 02:00:50",
    vip_type: "vip",
    now_time: "2024-09-22 02:02:05",
    isExpire: false,
    isExist: true,
    in_app: "[{\"quantity\": \"1\", \"product_id\": \"vip_1_year_auto\", \"transaction_id\": \"60002037256498\", \"original_transaction_id\": \"60002037256498\", \"purchase_date\": \"2024-09-21 18:00:50 Etc/GMT\", \"purchase_date_ms\": \"1726941650000\", \"purchase_date_pst\": \"2024-09-21 11:00:50 America/Los_Angeles\", \"original_purchase_date\": \"2024-09-21 18:00:51 Etc/GMT\", \"original_purchase_date_ms\": \"1726941651000\", \"original_purchase_date_pst\": \"2024-09-21 11:00:51 America/Los_Angeles\", \"expires_date\": \"2099-09-09 18:00:50 Etc/GMT\", \"expires_date_ms\": \"4092634012000\", \"expires_date_pst\": \"2099-09-09 11:00:50 America/Los_Angeles\", \"web_order_line_item_id\": \"60000900340093\", \"is_trial_period\": \"true\", \"is_in_intro_offer_period\": \"true\", \"in_app_ownership_type\": \"PURCHASED\"}]"
  }],
  code: 1
};
body = JSON.stringify(obj);
$done({
  body: body
});