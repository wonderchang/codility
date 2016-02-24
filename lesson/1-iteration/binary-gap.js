
console.log(solution(9));
console.log(solution(529));
console.log(solution(20));
console.log(solution(15));
console.log(solution(1041));

function solution(N) {
  var l = 0;
  var i = 0;
  var L = 0;
  N = N.toString(2);
  while(N[i++] === '0') continue;
  while(N[i] !== undefined) {
    if(N[i++] === '1') {
      if(l > L) L = l;
      l = 0
    } else l++;
  }
  return L;
}
