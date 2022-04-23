
function findSmallCount(arr,n){
	var result = 0 
	for (i=0;i<arr.length;i++){
		if (arr[i] < n){
			result ++
		}
	}
	return result 
}

console.log(findSmallCount([1,2,3],2))

console.log(findSmallCount([1,2,3,4,5],0))

console.log(findSmallCount([1,2,3,4],100))

