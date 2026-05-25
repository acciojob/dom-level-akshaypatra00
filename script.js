// //your JS code here. If required.
let ele = document.getElementById("level")
let level = 0
 while (ele) {
  ele = ele.parentElement
	level+=1
 }
 alert(`the level of the element is:${level}`)