function removeElement(array,index){
	console.log('array: ',array, ' index: ',index )
	for(var i=index; i<array.length; ++i){
		console.log("i: ",i)
		console.log("current: ", array[i-1] )
		console.log("next: "   , array[i] )
		array[i] = array[i+1]
	}

	console.log(array)
//	return array.slice(0,array-2)

} 

removeElement([1,2,3,4,5,6],process.argv[2])


