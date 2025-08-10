/* 
// * * * *
// *     *
// *     *
// * * * *
var row = 4;
for (var i = 0; i < row; i++) {
  for (var j = 0; j < row; j++) {
    if (i == 0 || j == 0 || i == row - 1 || j == row - 1)
      process.stdout.write("* ");
    else process.stdout.write("  ");
  }
  console.log();
}

//    1
//   2 2
//  3 3 3
// 4 4 4 4

var n = 4;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }
    for (var j = 1; j <= i; j++) {
        process.stdout.write(i + " ");
    }
    console.log();
}

// 1            1
// 1 2          2 3
// 1 2 3        4 5 6
// 1 2 3 4      7 8 9 10  => for this initialize a pointer in starting with 1 and increment it inside of the nested loop.

var n = 4;
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}

// 1
// 0 1
// 1 0 1
// 0 1 0 1

var n = 4;
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    process.stdout.write((i + j) % 2 == 0 ? "1 " : "0 ");
  }
  console.log();
}

// 1 2 3 4
// 1 2 3
// 1 2
// 1
var n = 4;
for (var i = 1; i <= n; i++) {
    var count = 1;
    for (var j = n; j >= i; j--) {
        process.stdout.write(count + " ");
        count++;
    }
    console.log();
}
//     1
//   2 1 2
// 3 2 1 2 3

var n = 4;
for (var i = 1; i <= n; i++) {
  // space
  for (var j = 1; j <= 2 * (n - i); j++) {
    process.stdout.write(" ");
  }
  // pyramid
  for (let k = i; k >= 1; k--) {
    process.stdout.write(k + " ");
  }
  // reverse pyramid
  for (let k = 2; k <= i; k++) {
    process.stdout.write(k + " ");
  }
  console.log();
}

// * * * *
//   * * * *
//     * * * *
let n = 4;
for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) {
        process.stdout.write(" ");
    }
    for (let j = 1; j <= n; j++) { // starts from the point after space
    process.stdout.write("* ");
}
console.log();
}
*/


