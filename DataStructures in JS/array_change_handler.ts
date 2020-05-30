let myArray = []

Object.defineProperty(myArray, "push", {
	configurable: false,
	enumerable: false, // hide from for...in
	writable: false,
	value: function () {
	  for (var i = 0, n = this.length, l = arguments.length; i < l; i++, n++) {          
		console.log(arguments);
	  }
	  return n;
	}
  });



myArray.push([1,2,3])