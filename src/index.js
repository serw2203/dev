function checkNumber (n) {
    if (n === null || Number.isNaN(Number(n))) {
        throw new Error('не число');
    }
}

function checkQuadraticEquation (n) {
    if (n === 0) {
        throw new Error('не квадратное уравнение');
    }
}

function checkDiscriminant (d) {
    if (d < 0) {
        throw new Error('решения нет');
    }
}

function quadraticEquation (a, b, c) {
    checkNumber(a);
    checkQuadraticEquation(a);
    checkNumber(b);
    checkNumber(c);
    
    let d = b ** 2 - 4 * a * c;
    checkDiscriminant(d);

    if (d === 0) {
        let x1 = -b / (2 * a);
        x1 = x1 === -0 ? 0 : x1;
        return {x1};
    }

    let x1 = (-b - Math.sqrt(d)) / (2 * a);
    let x2 = (-b + Math.sqrt(d)) / (2 * a);

    return {x1, x2};
}

module.exports = {quadraticEquation};