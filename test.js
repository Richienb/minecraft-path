const os = require("os")
const test = require("ava")
const minecraftPath = require(".")

test("type of minecraftPath return", t => {
	const originalPlatform = process.platform

	const platforms = ["win32", "darwin", "linux", "android"]

	t.plan(platforms.length)

	for (const platform of platforms) {
		Object.defineProperty(process, "platform", {
			value: platform
		})

		t.is(typeof minecraftPath(), "string")
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
