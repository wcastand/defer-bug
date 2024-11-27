# Install


```
yarn install
```


# Server

```
yarn workspace server run dev
```

# App

```
yarn worksapce expo run ios
```


# Unrelated bug

also trying to setup for defer bug i get a crash on ios when i first bbuild the app and it launches on emulator

```
[CoreFoundation] *** Terminating app due to uncaught exception 'NSInvalidArgumentException', reason: 'There doesn't seem
to be a valid compiled storyboard at path
'/Users/wcastand/Library/Developer/CoreSimulator/Devices/6BCEFA94-DAAA-409F-AD88-AA05A7267E99/data/Containers/Bundle/Application/0E715A72-D6E0-43BD-9635-AB365B482A97/app.app/SplashScreen.storyboardc''
*** First throw call stack:
(
0   CoreFoundation                      0x00000001804b757c __exceptionPreprocess + 172
1   libobjc.A.dylib                     0x000000018008eda8 objc_exception_throw + 72
2   UIKitCore                           0x0000000185c823dc -[UIStoryboard name] + 0
3   app.debug.dylib                     0x000000010457ea90 $sSo12UIStoryboardC4name6bundleABSS_So8NSBundleCSgtcfCTO + 64
4   app.debug.dylib                     0x000000010457e0d8 $s16ExpoSplashScreen0bC7ManagerC8initWithyySo6UIViewCF + 168
5   app.debug.dylib                     0x000000010457d5e0
$s16ExpoSplashScreen0bC21AppDelegateSubscriberC17customizeRootViewyySo6UIVie<…>
```