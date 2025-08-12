#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <CaptainHook/CaptainHook.h>
#import <Foundation/Foundation.h>


%hook NSURLSession
- (id)dataTaskWithRequest:(NSMutableURLRequest *)request completionHandler:(void (^)(NSData *data, NSURLResponse *response, NSError *error))completionHandler {
    void (^customCompletion)(NSData *data, NSURLResponse *response, NSError *error) = ^(NSData *data, NSURLResponse *response, NSError *error) {
        if ([request.URL.absoluteString containsString:@"verifyReceipt"]) {
            NSDictionary *dict = @{
                @"environment" : @"Production",
                @"receipt" : @{
                    @"receipt_type" : @"Production",
                    @"app_item_id" : @6492429545,
                    @"receipt_creation_date" : @"2024-05-21 09:24:50 Etc/GMT",
                    @"bundle_id" : @"com.seawardhyacinth.pokecut",
                    @"original_purchase_date" : @"2024-05-21 09:20:21 Etc/GMT",
                    @"in_app" : @[
                        @{
                            @"quantity" : @"1",
                            @"purchase_date_ms" : @"1716283488000",
                            @"expires_date" : @"2099-09-09 09:24:48 Etc/GMT",
                            @"expires_date_pst" : @"2099-05-24 02:24:48 America/Los_Angeles",
                            @"is_in_intro_offer_period" : @"true",
                            @"transaction_id" : @"310001838254439",
                            @"is_trial_period" : @"true",
                            @"original_transaction_id" : @"310001838254439",
                            @"purchase_date" : @"2024-05-21 09:24:48 Etc/GMT",
                            @"product_id" : @"com.seawardhyacinth.pokecut.yearly",
                            @"original_purchase_date_pst" : @"2024-05-21 02:24:49 America/Los_Angeles",
                            @"in_app_ownership_type" : @"PURCHASED",
                            @"original_purchase_date_ms" : @"1716283489000",
                            @"web_order_line_item_id" : @"310000880451461",
                            @"expires_date_ms" : @"1716542688000",
                            @"purchase_date_pst" : @"2024-05-21 02:24:48 America/Los_Angeles",
                            @"original_purchase_date" : @"2024-05-21 09:24:49 Etc/GMT"
                        }
                    ],
                    @"adam_id" : @6492429545,
                    @"receipt_creation_date_pst" : @"2024-05-21 02:24:50 America/Los_Angeles",
                    @"request_date" : @"2024-05-21 09:24:52 Etc/GMT",
                    @"request_date_pst" : @"2024-05-21 02:24:52 America/Los_Angeles",
                    @"version_external_identifier" : @865445665,
                    @"request_date_ms" : @"1716283492827",
                    @"original_purchase_date_pst" : @"2024-05-21 02:20:21 America/Los_Angeles",
                    @"application_version" : @"1",
                    @"original_purchase_date_ms" : @"1716283221000",
                    @"receipt_creation_date_ms" : @"1716283490000",
                    @"original_application_version" : @"1",
                    @"download_id" : @503488493858230780
                },
                @"pending_renewal_info" : @[
                    @{
                        @"product_id" : @"com.seawardhyacinth.pokecut.yearly",
                        @"original_transaction_id" : @"310001838254439",
                        @"auto_renew_product_id" : @"com.seawardhyacinth.pokecut.yearly",
                        @"auto_renew_status" : @"1"
                    }
                ],
                @"status" : @0,
                @"latest_receipt_info" : @[
                    @{
                        @"quantity" : @"1",
                        @"purchase_date_ms" : @"1716283488000",
                        @"expires_date" : @"2099-09-09 09:24:48 Etc/GMT",
                        @"expires_date_pst" : @"2099-05-24 02:24:48 America/Los_Angeles",
                        @"is_in_intro_offer_period" : @"false",
                        @"transaction_id" : @"310001838254439",
                        @"is_trial_period" : @"true",
                        @"original_transaction_id" : @"310001838254439",
                        @"purchase_date" : @"2024-05-21 09:24:48 Etc/GMT",
                        @"product_id" : @"com.seawardhyacinth.pokecut.yearly",
                        @"original_purchase_date_pst" : @"2024-05-21 02:24:49 America/Los_Angeles",
                        @"in_app_ownership_type" : @"PURCHASED",
                        @"subscription_group_identifier" : @"21479571",
                        @"original_purchase_date_ms" : @"1716283489000",
                        @"web_order_line_item_id" : @"310000880451461",
                        @"expires_date_ms" : @"4092610661000",
                        @"purchase_date_pst" : @"2024-05-21 02:24:48 America/Los_Angeles",
                        @"original_purchase_date" : @"2024-05-21 09:24:49 Etc/GMT"
                    }
                ]
            };
            
            data = [NSJSONSerialization dataWithJSONObject:dict options:0 error:nil];
        }
        completionHandler(data, response, error);
    };

    return %orig(request, customCompletion);
}
%end