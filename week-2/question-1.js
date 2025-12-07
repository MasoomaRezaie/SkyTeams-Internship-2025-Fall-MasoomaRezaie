function varSwap(a, b){
    [a, b] = [b,a];
    return `a = ${a} /n b = ${b}`
}
module.exports = varSwap;