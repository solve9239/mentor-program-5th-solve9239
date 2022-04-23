
function sum(arr){
	var ans = 0
	for (i=0;i<arr.length;i++){
		ans += arr[i]
	}
	return ans
}

console.log(sum([1,2,3]))

console.log(sum([-1,1,2,-2,3,-3]))


