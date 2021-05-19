/*
* Write a function that, given two integers, N and K, returns 
* a palindrome of length N which consists of K distinct lower
* case letters.
*/

function solution(N, K) {
    var count = K;
    var ret = '';
    for (var i = 0; i < (N / 2); i++) {
        if ((count > 0)) {
            ret = ret.concat(String.fromCharCode(count+96));
            count--;
        } else {
            ret = ret.concat(String.fromCharCode(count+97));
        }
    }
    return(mirror(ret, N));

    function mirror(str, odd) {
        var len = odd;
        if(odd % 2 == 0) {
            for (var i = odd / 2; i > 0; i--) {
                str = str.concat(str[i-1]);
            }
        } else {
            for (var i = ((len-1) / 2)-1; i > -1; i--) {
                str = str.concat(str[i]);
            }
        }
        return str;
    }
}

/*
* Write a function that, given string S of length N, returns
* the minimum number of substrings into which the string has
* to be split.
*/

function solution(S) {
    var used = [''];
    for (var i = 0; i < S.length; i++) {
        for (var c = 0; c < used.length; c++) {
            if (!(used[c].includes(S[i]))) {
                used[c] = used[c].concat(S[i]);
                c = used.length;
            } else if (c == used.length - 1) {
                used.push('');
            }
        }
    }
    return used.length;
}