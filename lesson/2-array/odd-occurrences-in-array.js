A = [9, 3, 9, 3, 9, 7, 9];

console.log(solution(A));

function solution(A) {
  var i;
  var o = A[0].toString(2);
  var l = A.length;
  for(i = 1; i < l; i++) o = o ^ A[i].toString(2);
  return parseInt(o, 2);
}
