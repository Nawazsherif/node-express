exports.checkValid = checkFiniteInteger;

function checkFiniteInteger(num) {
    const id = parseInt(num,10);
    return typeof(id) === 'number' &&
            isFinite(id) &&
            Math.round(id) === id
            && num.toString().length == id.toString().length; 
}
