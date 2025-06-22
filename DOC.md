Добавить плагин:
    Создать отдельно проект, типа папка с файлам, например так:
    plugman create --name TennisPlugin --plugin_id cordova-plugin-tennis --plugin_version 1.0.0 cordova_plugin_tennis
    В корень нового плагина добавить package.json
    {
    "name": "cordova-plugin-tennis",
    "version": "0.0.1",
    "cordova": {
        "id": "com.example.plugin.tennis",
        "platforms": ["android", "ios"]
    }
    }
    и с основного проекта выполнить по относительному пути:
    cordova plugin add ./path/to/myplugin
    Я делал 
    cordova plugin add ..\TennisPlugin
    так как он у меня локально лежит

________________________________________________________
КАК НАСТРОИТЬ ЛОКАЛЬНО ПЛАГИН С ФАЙЛОВОЙ СИСТЕМЫ, А ДЛЯ РАЗРАБОТКИ С ГИТА
    "cordova-plugin-tennis": "file:../TennisPlugin" - локалька, пример
    "cordova-plugin-tennis": "github:MukBet/cordova_plugin_game_snake" - гит, пример

# В основном проекте для локлаьной разработки всегда используй локальный путь
cordova plugin add ../TennisPlugin --force
--force перезапишет даже если уже был установлен из Git
# Установка плагина для продакшн/коллег
cordova plugin add https://github.com/MukBet/cordova_plugin_game_snake

# Командой переключаться между версиями:
## для локальной отладки
cordova plugin rm cordova-plugin-tennis
cordova plugin add ../TennisPlugin
## для тестов продакшн-сборки
cordova plugin rm cordova-plugin-tennis
cordova plugin add https://github.com/MukBet/cordova_plugin_game_snake
#
cordova plugin rm cordova-plugin-tennis
cordova plugin add ../SnakePlugin --force
cordova prepare browser
cordova run browser
