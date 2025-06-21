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