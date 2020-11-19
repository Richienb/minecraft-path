"use strict"

const os = require("os")
const path = require("path")

module.exports = () => {
	if (process.platform === "win32") {
		return path.join(os.homedir(), "AppData", "Roaming", ".minecraft")
	}

	if (process.platform === "darwin") {
		return path.join(os.homedir(), "Library", "Application", "Support", "minecraft")
	}

	if (process.platform === "linux") {
		return path.join(os.homedir(), ".minecraft")
	}

	if (process.platform === "android") {
		return path.join("/", "sdcard", "games", "com.mojang")
	}

	throw new Error(`${process.platform} is not supported!`)
}

module.exports.win10 = () => {
	if (process.platform !== "win32" || Number.parseInt(os.release().split(".")[0], 10) !== 10) {
		throw new Error("Windows 10 is required!")
	}

	return path.join(os.homedir(), "AppData", "Local", "Packages", "Microsoft.MinecraftUWP_8wekyb3d8bbwe", "LocalState", "games", "com.mojang")
}
