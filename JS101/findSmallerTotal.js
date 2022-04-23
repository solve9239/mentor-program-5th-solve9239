

function findSmallerTotal(arr,n){
	var total = 0
	for (i=0;i<arr.length;i++){
		if (arr[i] < n){
			total += arr[i]
		}
	}
	return total
}

console.log(findSmallerTotal([1,2,3],3))

console.log(findSmallerTotal([1,2,3],1))

console.log(findSmallerTotal([3,2,5,8,7],999))

console.log(findSmallerTotal([3,2,5,8,7],0))
