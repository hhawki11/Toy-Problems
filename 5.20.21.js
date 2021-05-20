/*
* Write a functon that, given array A of N integers,
* returns true if at least two digits differ by 1.
*/

function solution(A) {
    for (var i = 0; i < A.length; i++) {
        for (var k = 0; k < A.length; k++) {
            if (A[i] - A[k] == 1 || A[k] - A[i] == 1) {
                return true;
            }
        }
    }
    return false;
}

/*
* Write a functin that, given integer N, returns the
* maximum possible value obtainable by deleting one 
* '5' digit from the decimal representation of N.
*/

function solution(N) {
    var max = Number.MIN_SAFE_INTEGER + 1;
    var nString = N.toString();
    for (var i = 0; i < nString.length; i++) {
        var curr = nString[i];
        if (curr === '5') {
            var newString = nString.substring(0, i) + nString.substring(i + 1, nString.length);
            if (!max || max < parseInt(newString)) {
                max = parseInt(newString);
            }
        }
    }
    return max;
}