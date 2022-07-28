/**
 * В данной задаче требуется вычислить сумму двух входных целых чисел, лежащих в отрезке от нуля до десяти.
 * 
 * In this problem, it is required to calculate the sum of two input numbers contained in the interval from zero to ten.
 */

let stdin = process.openStdin();

stdin.on('data', function(data) {
    let params = data.toString().split(" ");
    let reducer = (prev, cur) => parseInt(prev) + parseInt(cur);
    console.log(params.reduce(reducer));
});
