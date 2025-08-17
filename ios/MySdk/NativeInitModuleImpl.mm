
//
//  Created by logan xin on 2025/8/11.
//

#import <Foundation/Foundation.h>
// 引入 codegen 生成的头文件（含 C++）
#import "NativeInitModule/NativeInitModule.h"


@interface NativeInitModuleImpl : NSObject <NativeInitModuleSpec>
@end

@implementation NativeInitModuleImpl


- (instancetype)init {
  if (self = [super init]) {
    NSLog(@"NativeInitModuleImpl instance created");
  }
  return self;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeInitModuleSpecJSI>(params);
}

+ (BOOL)requiresMainQueueSetup {
  NSLog(@"NativeInitModuleImpl: requiresMainQueueSetup called");
  return NO;
}

- (void)initialize:(RCTPromiseResolveBlock)resolve
            reject:(RCTPromiseRejectBlock)reject
{
  NSLog(@"NativeInitModuleImpl: initialize called");
  // 在这里执行你的初始化逻辑
  BOOL success = YES; // 假设初始化成功

  if (success) {
    resolve(@"Init success from iOS native");
  } else {
    reject(@"INIT_ERROR", @"Initialization failed", nil);
  }
}

+ (NSString *)moduleName
{
  return @"NativeInitModule";
}

@end
