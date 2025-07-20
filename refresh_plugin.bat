@echo off
echo Script is not workable from start to end, but you can copy commands from here from top to bottom or run it and if it stops - continue from next step.

REM === Удаление платформы и плагина ===
echo Removing old platform and plugin...
cordova plugin remove cordova-plugin-snake
cordova platform remove android

REM === Очистка кэша ===
echo Cleaning platforms and plugins folders...
rmdir /s /q platforms
rmdir /s /q plugins

REM === Установка платформы и плагина заново ===
echo Reinstalling platform and plugin...
cordova platform add android
cordova plugin add ..\SnakePlugin

REM === Генерация и запуск ===
echo Preparing and running app...
cordova prepare android
cordova run android
