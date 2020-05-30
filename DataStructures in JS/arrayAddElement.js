function insert(array,element,index){

	console.log("Original Array: ",array)

	for(var i=array.length; i>=index ; --i){
		console.log(i)
		array[i] = array[i-1]
		
		if(i == index){
			array[i] = element
		}	
	}
	
	console.log(array)

}

insert([1,2,3,4,5], process.argv[2] , process.argv[3]) 
