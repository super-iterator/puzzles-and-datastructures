function qSort(arr) {

    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];


    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else{
            right.push(arr[i]);
        }
    }

    // console.log(arr);
    return qSort(left).concat(pivot, qSort(right));
}


var random_list = []
for (var i = 0; i < 10; i++) {
    random_list.push(Math.floor(Math.random()*100))
}

console.log('original: ',random_list);


console.log('sorted: ',  qSort(random_list) )
