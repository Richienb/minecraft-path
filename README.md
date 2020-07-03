# minecraft-path [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/minecraft-path/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/minecraft-path)

Get the directory where the Minecraft files are stored.

[![NPM Badge](https://nodei.co/npm/minecraft-path.png)](https://npmjs.com/package/minecraft-path)

## Install

```sh
npm install minecraft-path
```

## Usage

```js
const minecraftPath = require("minecraft-path");

minecraftPath();
//=> "C:\\Users\\richi\\AppData\\Roaming\\.minecraft"

minecraftPath.win10();
//=> "C:\\Users\\richi\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang"
```

## API

### minecraftPath()

Get the directory where the Minecraft Java Edition files are stored.

### minecraftPath.win10()

Get the directory where the Minecraft Windows 10 Edition files are stored.
