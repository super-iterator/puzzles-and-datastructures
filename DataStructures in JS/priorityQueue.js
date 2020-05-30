function dequeue(){
	
	/// Finds the element with highest priority (lowest value), and pulls it off from teh queue to be processed first


	var priority = dataStore[0].code
	for(var i=1; i<dataStore.length; ++i){
		if(dataStore[i].code < priority ){
			priority = dataStore[i].code
			var position = i
		} 
	}

	return console.log(dataStore.splice(position,1))
}


dataStore = [{name:'b',code:10},{name:'v',code:11},{name:'x',code:41},{name:'p',code:95},{name:'x',code:66},{name:'r',code:4},{name:'g',code:1}]

dequeue()

