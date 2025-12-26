function pascalTriangle(rows) {
    result = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            // push 1 in the corners and sum tow above numbers for others
        (j === 0 || j === i) ? row.push(1) : row.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
        result.push(row);
        console.log(row.join(" "));
    }
}
pascalTriangle(5);
module.exports = pascalTriangle;