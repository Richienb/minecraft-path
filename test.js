const test = require("ava")
const minecraftPath = require(".")

test("main", t => {
	t.is(typeof minecraftPath(), "string")
})
