var inverse = ""
function reverse(arr , start=0, end=5) {

    var N = arr.length

    console.log(N);

    // if(arr.length < 2) return arr
    if (start == end) {
        return arr
    }

    return reverse( arr.slice(start,end) + arr[0], ++start)
}


console.log(reverse("hello"));
