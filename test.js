const os = require("os")
const path = require("path")
const test = require("ava")
const minecraftPath = require(".")

test("main", t => {
	t.is(typeof minecraftPath(), "string")
})

test("minecraftPath return", t => {
	const originalPlatform = process.platform

	const testCases = {
		win32: path.join(os.homedir(), "AppData", "Roaming", ".minecraft"),
		darwin: path.join(os.homedir(), "Library", "Application", "Support", "minecraft"),
		linux: path.join(os.homedir(), ".minecraft"),
		android: path.join("/", "sdcard", "games", "com.mojang")
	}

	t.plan(Object.keys(testCases).length)

	for (const platform in testCases) {
		if (Object.prototype.hasOwnProperty.call(testCases, platform)) {
			Object.defineProperty(process, "platform", {
				value: platform
			})

			t.is(minecraftPath(), testCases[platform])
		}
	}

	Object.defineProperty(process, "platform", {
		value: originalPlatform
	})
})

test("platform not supported error", t => {
	const supported = ["win32", "darwin", "linux", "android"]

	if (supported.includes(process.platform)) {
		t.notThrows(() => minecraftPath(), `${process.platform} is not supported!`)
	} else {
		t.throws(() => minecraftPath(), `${process.platform} is not supported!`)
	}
})

test("Windows 10 is required error", t => {
	if (process.platform !== "win32" || Number.parseInt(os.release().split(".")[0], 10) !== 10) {
		t.throws(() => minecraftPath.win10(), "Windows 10 is required!")
	} else {
		t.notThrows(() => minecraftPath.win10(), "Windows 10 is required!")
	}
})
