
function add(numlist) {
    if(typeof numlist !== "string") {
        return 0;
    }

    const arr = numlist.split(',').map(x => +x);
    const result = arr.reduce((a, b) => a + (+b), 0);
    return result;
}

module.exports = add;
