# Ion Github - a simple ionic-angular project CLI guide

## App preview

### iOS

<img src="preview/ios-1.gif" alt="Drawing" width="250"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="preview/ios-2.gif" alt="Drawing" width="250"/>

## Development

### Start an ionic project

```sh
ionic start project-name
```

then you'll be prompted to choose a starting template. For example, this app uses `tabs` as the starting template.


### Preview

To preview the app in a browser on multiple platforms:

```sh
ionic lab
```

To preview the app in a web-app form:

```sh
ionic serve
```

### App icon and splash screen

Replace the `icon.png` and `splash.png` file under folder `resources` with your own files (**Keep the size and aspect ratio**), then run

```sh
ionic cordova resources
```

to automatically generate the icons and splash screens for different platforms.

### App name & version & bundle id

To change the app name, please change the following line in `config.xml`:

```xml
<name>Ionic Github</name>
```

To change the app version or the bundle id, please change the following line in `config.xml`:

```xml
<widget id="io.ionic.starter.lxieyang" version="1.1.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

## Deployment

Please refer to [https://ionicframework.com/docs/intro/deploying/](https://ionicframework.com/docs/intro/deploying/) for more about deployment.

### Android

To deploy to an Android device in debug mode：

```sh
ionic cordova run android
```


### iOS

To deploy to an iOS device in debug mode:

1. 
```sh
ionic cordova build ios --prod
```
2. Open the `.xcodeproj` file in `platforms/ios/` in Xcode
3. Connect your phone via USB and select it as the run target
4. Click the play button in Xcode to try to run your app

