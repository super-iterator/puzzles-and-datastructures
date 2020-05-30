// var mocha = require ('mocha');
// var assert = require('assert')
var _ = require('lodash')

let myObject =  {
	
	egg : "myEgg",

	func : function() {
		let self = this;
		console.log("external this and self",this.egg);
		console.log("external this and self",self.egg);

		(
			function() {
				console.log("Internal this and self",this.egg);
				console.log("Internal this and self",self.egg);
			}
		)();

		(
			function() {
				console.log("Internal this and self",this.egg);
				console.log("Internal this and self",self.egg);
			}()
		)
	}
}
myObject.func()


class parent{

	constructor(one,two){
		this.one = one
		this.two = two
	}

	static statical(){
		return "Hello static/class method"
	}
}

class parent2{
	constructor(){
		console.log("Another parent");
	}
}

class child extends parent {
}

function palindrome(string) {
	stackList = [];

	for (let i= string.length-1; i >= 0 ; i--) {
		stackList.push(string[i])
	}

	stack = stackList.join("")
	
	if (stack === string) {
		console.log("The input string is a Plindrome")
	} else {
		console.log("NOT a Plindrome")
	}
}

// Generators in javaScript
function* gen() {
	yield "hello"
	yield "amazing"
	yield "world"
	yield "war"
	yield "three"
}

palindrome("stack");
palindrome("baab");

console.log("\n");

let g = gen();

console.log( g.next("zoo") );
console.log( g.next("doo") );
console.log( g.next("goo") );

console.log("\n Using for loop to iterate through the JS generator \n");


for (const i of gen()) {
	console.log(i);
}

status = [];

var person = { 
	firstname:"Tom", 
	lastname:"Hanks", 
	func:function(){return "Hello!!"},    
	func2:()=>{return "Hello Lambda!!"}  
 }; 

 console.log(person.firstname);
 console.log(person.func());
 console.log(person.func2());

 console.log("Random Number: ",Math.random()*100);

 console.log("date: ", new Date().getDay());
 console.log("date: ", new Date().getUTCDate());
 
 console.log(new child("child_param1","child_param2"));
 
 console.log(parent.statical());


/////////// Testing ////////////////
// describe("Testing array",()=>{
// 	it("test equality",()=>{
// 		assert.equal([1,2,3].indexOf(4),-1)
// 	})

// 	it("another test",()=>{
// 		assert.equal(100,100)
// 	})
// })
 
// describe("Testing array",()=>{
// 	it("test equality",()=>{
// 		assert.equal([1,2,3].indexOf(4),-1)
// 	})

// 	it("another test",()=>{
// 		assert.equal(100,100)
// 	})
// })

console.log( _.range(4,11,2) );