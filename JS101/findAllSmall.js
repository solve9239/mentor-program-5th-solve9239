
function findAllSmall(arr,n){
	var small = []
	for (i=0;i<arr.length;i++){
		if ( arr[i] < n ){
			small.push(arr[i])
		}
	}
	return small
}

console.log(findAllSmall([1,2,3],10))

console.log(findAllSmall([1,2,3],2))

console.log(findAllSmall([1,3,5,4,2],4))

