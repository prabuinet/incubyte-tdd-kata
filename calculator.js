
function add(numlist) {
    if(typeof numlist !== "string") {
        return 0;
    }

    if(numlist.trim() == '')
        return 0;

    if(numlist.indexOf('\n') === -1)
        throw Error("delimiter not found");

    const [ , delimiter, str, ] = numlist.split(/\/\/(.)\n(.*)/s);
    const arr = str.split(delimiter).map(x => +x);
    const result = arr.reduce((a, b) => a + (+b), 0);
    return result;
}

module.exports = add;
