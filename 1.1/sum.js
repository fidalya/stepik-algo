let stdin = process.openStdin();

stdin.on('data', function(data) {
    let params = data.toString().split(" ");
    let reducer = (prev, cur) => parseInt(prev) + parseInt(cur);
    console.log(params.reduce(reducer));
});