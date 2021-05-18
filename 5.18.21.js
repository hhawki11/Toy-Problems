/*
* Create a function that takes a string and returns true 
* if all instances of 'a' are before all instances of 'b' 
*/

function solution(S) {
    var foundB = false;
    for (var i = 0; i < S.length; i++) {
        if (S[i] === 'b') {
            foundB = true;
        }
        if (foundB && S[i] === 'a') {
                return false;
        }
    }
    return true;
}

/*
* Create a functon that takes a string and returns the
* length of the longest "balanced" substring, or returns
* -1 if there is noo balanced substring.
*/

function solution(S) {
    var longest = -1;
    for (var i = 0; i < S.length; i++) {
        for (var c = i+1; c < S.length; c++) {
            if (isBalanced(S.substring(i, c))) {
                longest = c - i;
            }
        }
    }
    if (isBalanced(S)) {
        longest = S.length;
    }
    return longest;
    function isBalanced(input) {
        var upper = [];
        var lower = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i] === input[i].toUpperCase()) {
                upper.push(input[i]);
            } else {
                lower.push(input[i]);
            }
        }
        for (var i = 0; i < upper.length; i++) {
            if (!(lower.includes(upper[i].toLowerCase()))) {
                return false;
            }
        }
        for (var i = 0; i < lower.length; i++) {
            if (!(upper.includes(lower[i].toUpperCase()))) {
                return false;
            }
        }
        return true;
    }
}