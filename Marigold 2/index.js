
var isTouch = ''

function TouchOrNot() {
	if (( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 ))
		isTouch = true
	else
		isTouch = false
}

export isTouch