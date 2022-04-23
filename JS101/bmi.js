
var w = weight = 74
var h = height = 1.7

var bmi = ( w / ( h*h ) )


console.log(bmi)

if (bmi < 18.5) {
	console.log("過輕")
}else if (bmi < 24){
	console.log("正常")
}else if (bmi < 27){
	console.log("過重")
}else if (bmi < 30){
	console.log("輕度肥胖")
}else if (bmi < 35){
        console.log("中度肥胖")
}else {
        console.log("重度肥胖")
}



		

