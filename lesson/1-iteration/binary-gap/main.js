function solution(N) {
  N = N.toString(2);
  var g = 0; // Temp gap size
  var G = 0; // Largest gap size
  var i = 0;
  // Eliminate 0 head
  while(N[i++] === '0') continue;
  // Start process when encoutering 1
  while(N[i] !== undefined) {
    if(N[i++] === '1') {
      // Update when it is larger
      if(g > G) G = g;
      g = 0;
    } else g++;
  }
  return G;
}
