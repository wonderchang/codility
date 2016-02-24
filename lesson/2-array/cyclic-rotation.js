var A = [3, 8, 9, 7, 6];
console.log(A);
console.log(solution(A, 3));

function solution(A, K) {
  if(A.length === 0) return A;
  while(K-- > 0) A.unshift(A.pop());
  return A;
}
