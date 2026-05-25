//your JS code here. If required.
let ele = getelementbyId("level")
let level = 0
while (ele.parentElement) {
	level+=ele.parentElement
}
alert(~the level of the element is:${level}~)