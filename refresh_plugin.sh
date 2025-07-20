#!/bin/bash

echo "🧹 Удаление старого плагина и платформы..."
cordova plugin remove cordova-plugin-snake
cordova platform remove android

echo "🗑 Очистка каталогов..."
rm -rf platforms plugins

echo "📦 Установка платформы и плагина заново..."
cordova platform add android
cordova plugin add ../SnakePlugin

echo "⚙️  Подготовка и запуск..."
cordova prepare android
cordova run android
