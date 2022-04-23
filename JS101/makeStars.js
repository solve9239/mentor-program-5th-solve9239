
function makeStars(n){
	var result = ""
	var stars = ""
	for (i=0;i<n;i++){
		stars += "*"
		result += stars
		if ( 1 < n ){
			result += "\n"
		}
	}
	return result
}

console.log(makeStars(1))

console.log(makeStars(2))

console.log(makeStars(5))

