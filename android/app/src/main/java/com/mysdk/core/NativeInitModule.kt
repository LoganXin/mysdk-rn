package com.mysdk.core

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.turbomodule.core.interfaces.TurboModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import kotlinx.coroutines.*

@ReactModule(name = NativeInitModule.NAME)
class NativeInitModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext), TurboModule {

    companion object {
        const val NAME = "NativeInitModule"
    }

    override fun getName(): String = NAME

    @com.facebook.react.bridge.ReactMethod
    fun initialize(promise: Promise) {
        Log.d(NAME, "Android 原生初始化开始")
        CoroutineScope(Dispatchers.Main).launch {
            delay(1000)
            Log.d(NAME, "Android 原生初始化成功")
            promise.resolve("Android 初始化成功")
        }
    }
}
