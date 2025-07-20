type-c ссвяжи ноут и девайс, не забівай о режиме разработчика на телефоне...
adb devices
должно вернуть 
List of devices attached
R58X405G5FJ     device
а не 
List of devices attached
R58X405G5FJ     unauthorized

Если unauthorized, то:
adb kill-server
adb start-server
adb devices
Должно выдать норм тему
теерь 
adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk
при учете что ты в папке основного проекта а перед этим сбилдил под Андроид.
запуск игры\приложения:
 - руками кликнуть на иконку приложения
 - cordova run android

 логи в баш\гит терминали: adb logcat | grep SnakePlugin 