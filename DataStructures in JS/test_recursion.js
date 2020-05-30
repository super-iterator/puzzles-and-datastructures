function testRecursion(n) {


    if(n <= 0 ){
        return 1
    }


    return testRecursion(n-1) + testRecursion(n-2)

}


console.log( testRecursion(40) )
