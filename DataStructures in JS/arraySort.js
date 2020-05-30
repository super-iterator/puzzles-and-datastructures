function sort(array){
	
	array = array.replace(']','').replace('[','')

	array = array.split(',')

	for(var i=1; i<array.length; i++){
		for(var j=i; j>0; j--){
			if( array[j] < array[j-1]  ) {
				var temp = array[j]
				array[j] = array[j-1]
				array[j-1] = temp
			}
		}
	}

	console.log("Sorted Array:   ",array)

}

sort(process.argv[2])

//sort([9,1,8,2,7,3,6,4,5])
