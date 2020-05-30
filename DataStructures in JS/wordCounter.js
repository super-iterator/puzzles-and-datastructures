
function countWord(string){

	var arr = string.split(" ")
	var d = {}

	for(var i in arr){
		if(d[ arr[i] ]) d[ arr[i]  ] +=1
		else d[ arr[i] ] = 1
	}

	console.log(d)	

}

countWord("The quick brown fox jumped over the lazy dog ... and again the same fox jumped over the hill, and the dog stood up against him ... do you like this story??")
