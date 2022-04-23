
function position(str){
	var ans = ""
	var pos = -1
	var result = ""
	for (i=0;i<str.length;i++){
		if ( str[i] === str[i].toUpperCase() ){
			ans = str[i]
			pos = i
			result += ans
			result += " "
			result += pos
			return  result
		}
	}
	result += pos
	return result
}

console.log(position("abcd"))
console.log(position("AbcD"))
console.log(position("abCD"))
