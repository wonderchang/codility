/* MinAvgTwoSlice (https://codility.com/programmers/task/min_avg_two_slice/)
 *
 * A non-empty zero-indexed array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).
 *
 * For example, array A such that:
 * 
 *    A[0] = 4
 *    A[1] = 2
 *    A[2] = 2
 *    A[3] = 5
 *    A[4] = 1
 *    A[5] = 5
 *    A[6] = 8
 *
 * contains the following example slices:
 * 
 *    slice (1, 2), whose average is (2 + 2) / 2 = 2;
 *    slice (3, 4), whose average is (5 + 1) / 2 = 3;
 *    slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
 *
 * The goal is to find the starting position of a slice whose average is minimal.
 * 
 * Write a function:
 * 
 *    function solution(A);
 * 
 * that, given a non-empty zero-indexed array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.
 * 
 * For example, given array A such that:
 * 
 *    A[0] = 4
 *    A[1] = 2
 *    A[2] = 2
 *    A[3] = 5
 *    A[4] = 1
 *    A[5] = 5
 *    A[6] = 8
 *
 * the function should return 1, as explained above.
 * 
 * Assume that:
 * 
 *    N is an integer within the range [2..100,000];
 *    each element of array A is an integer within the range [−10,000..10,000].
 *
 * Complexity:
 * 
 *    expected worst-case time complexity is O(N);
 *    expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 * 
 * Elements of input arrays can be modified.
 * 
 * Copyright 2009–2016 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */
function solution(A) {
  var N = A.length;
  var minAvg = (A[0] + A[1]) / 2;
  var obj = [{ pos: 0, num: 2 }];
  var i, avg, item;
  for(i = 1; i < N - 1; i++) {
    avg = (A[i] + A[i + 1]) / 2;
    if(avg < minAvg) {
      minAvg = avg;
      obj = [{ pos: i, num: 2 }];
    }
    else if(avg === minAvg) {
      obj.push({ pos: i, num: 2 });
    }
  }
  var pos = obj[0].pos;
  var num = obj[0].num;
  while(item = obj.shift()) {
    for(i = item.pos - 1; i >= 0; i--) {
      avg = (minAvg * item.num + A[i]) / (item.num + 1);
      if(avg < minAvg) {
        minAvg = avg;
        item.pos = i;
        item.num += 1;
        pos = i;
        num += 1;
      }
      else break;
    }
    for(i = item.pos + num; i < N; i++) {
      avg = (minAvg * item.num + A[i]) / (item.num + 1);
      if(avg < minAvg) {
        minAvg = avg;
        item.num += 1;
        num += 1;
      }
      else break;
    }
  }
  return pos;
}
/*
 * Time: 20 min
 * Correctness: 80 %
 * Performance: 80 %
 */
