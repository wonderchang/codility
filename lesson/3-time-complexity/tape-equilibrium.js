
A = [-1000, 1000];

console.log(solution(A));

function solution(A) {
  var i;
  var L = A.length;
  var left = A[0];
  var right = 0;
  for(i = 1; i < L; i++) right += A[i];
  var min = Math.abs(left - right);
  for(i = 2; i < L; i++) {
    left += A[i - 1];
    right -= A[i - 1];
    m = Math.abs(left - right);
    if(m < min) min = m;
  }
  return min;
}
