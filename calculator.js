
function add(numlist) {
    if(typeof numlist !== "string") {
        return 0;
    }

    if(numlist.trim() == '')
        return 0;

    let arr = [];
    
    if(numlist.startsWith('//')) {
        const [ , delimiter, str, ] = numlist.split(/\/\/(.)\n(.*)/s);
        arr = str.split(delimiter).map(x => +x);
    } else {
        arr = numlist.split(/,|\n/).map(x => +x);
    }

    const negNumbers = arr.filter(x => x < 0);
    if(negNumbers.length > 0)
        throw new Error(`negative numbers not allowed ${negNumbers}`);
	
    const result = arr.reduce((a, b) => a + (+b), 0);
    return result;
}

module.exports = add;
