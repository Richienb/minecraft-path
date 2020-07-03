declare const minecraftPath: {
	/**
	Get the directory where the Minecraft Java Edition files are stored.
	@example
	```
	const minecraftPath = require("minecraft-path");

	minecraftPath();
	//=> "C:\\Users\\richi\\AppData\\Roaming\\.minecraft"
	```
	*/
	(): string

	/**
	Get the directory where the Minecraft Windows 10 Edition files are stored.
	@example
	```
	const minecraftPath = require("minecraft-path");

	minecraftPath.win10();
	//=> "C:\\Users\\richi\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang"
	```
	*/
	win10(): string
}

export = minecraftPath
