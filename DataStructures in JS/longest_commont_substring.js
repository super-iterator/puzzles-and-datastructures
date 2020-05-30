var outer = 0,
    i = 0,
    j=0,
    findings = []

var first = process.argv[2]
var second = process.argv[3]

first  = first  == undefined ? 'raven' : first
second = second == undefined ? 'havoc' : second


for (var outer = 0; outer < first.length; outer++) {
    for (var j = 0, i=outer; j < second.length; j++) {
        if (first[i] == second[j]) {
            findings[outer] = findings[outer] == undefined ? first[i] : findings[outer] + first[i]
            i++
        }
    }
}

console.log(findings);
