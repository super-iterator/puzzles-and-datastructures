function merge(Left,Right){

	var arr = []

      	m = 0
	n = 0

	for(var k=0; k<Left.length+Right.length; k++){
		if(Left[m] <= Right[n]){
			arr[k] = Left[m]
			m++
		} else{
			arr[k] = Right[n]
			n++
		}
	}


	console.log(arr)

}

function sort(arr){

	

}