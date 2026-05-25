//your JS code here. If required.
let ele = getelementbyId("level")
let level = 0
while (ele.parentElement) {
	level+=1
}
alert(~the level of the element is:${level}~)