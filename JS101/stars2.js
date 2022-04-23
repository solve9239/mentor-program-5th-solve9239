
function stars2(n){
	var result = ""
	for (i=0;i<n;i++){
		result += "*"
		console.log(result)
	}
	if ( 1 < n ){
		
		var count = n-1
		for (i=0;i<count;i++){
			result = ""
			for (j=0;j<count-i;j++){
			result += "*"
			}
			console.log(result)
		}
	}
}

stars2(1)

stars2(3)

stars2(5)

