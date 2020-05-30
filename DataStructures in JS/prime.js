
function prime(n){

    for(var i=1; i <= n; i++){  /// i=4

if(i ==1){
    console.log(i, " : is prime")
    continue
}

        for(j =2; j < i; j++){

            if ( i % j == 0 ){
                console.log(i, "is not prime")
                break

            } else {
                console.log(i, " is prime");
                break
            }

        }

}

}

prime(10)
