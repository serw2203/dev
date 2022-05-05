const {expect} = require('chai');
const {quadraticEquation, Transport, Car} = require('../src/index');

describe("Объект new Transport('1', '2', '3', '4')", function () {
    it("getInfo () = '3, 4'", function () {
        var t = new Transport('1', '2', '3', '4');
console.log('======= > ',t);
        expect(t.getInfo()).to.equal('3, 4');
    });
});

describe("Объект new Car('1', '2', '3', '4')", function () {
    it("getInfo () = '1, 2'", function () {
        var c = new Car('1', '2', '3', '4');
console.log('======= > ', c)
        expect(c.getInfo()).to.equal('1, 2');
    });
});

describe("Решение квадратного уравнения", function () {
    it("когда null * x ^2 = 0 тогда ошибка 'не число'", function () {
        expect(() => quadraticEquation(null, 1, 1)).to.throw('не число');
        expect(() => quadraticEquation(null)).to.throw('не число');
    });

    it("когда 12.13.14 * x ^2 = 0 тогда ошибка 'не число'", function () {
        expect(() => quadraticEquation('12.13.14', 1, 1)).to.throw('не число');
        expect(() => quadraticEquation('12.13.14')).to.throw('не число');
    });

    it("когда 0 * x ^2 - x + 1 = 0 тогда ошибка 'не квадратное уравнение'", function () {
        expect(() => quadraticEquation(0)).to.throw('не квадратное уравнение');
        expect(() => quadraticEquation(0, 1, 1)).to.throw('не квадратное уравнение');
    });

    it("когда x ^ 2 + 4 * x + 6 = 0 тогда ошибка 'решения нет'", function () {
        expect(() => quadraticEquation(1, 4, 6)).to.throw('решения нет');
    });

    it("когда x ^ 2 - 5 * x + 6 = 0 тогда x1 = 2, x2 = 3", function () {
        expect(quadraticEquation(1, -5, 6)).to.deep.equal({x1: 2, x2: 3});
    });

    it("когда x ^ 2 - Number.MAX_VALUE * x + 6 = 0 тогда x1 = -Infinity, x2 = Infinity", function () {
        expect(quadraticEquation(1, Number.MAX_VALUE, 6)).to.deep.equal({x1: -Infinity, x2: Infinity});
    });

    it("когда x ^ 2 - 5 * x + Number.MAX_VALUE = 0 тогда ошибка 'решения нет'", function () {
        expect(() => quadraticEquation(1, -5, Number.MAX_VALUE)).to.throw('решения нет');
    });

    it("когда Number.MAX_VALUE * x ^ 2 - 5 * x + 6 = 0 тогда ошибка 'решения нет'", function () {
        expect(() => quadraticEquation(Number.MAX_VALUE, -5, 6)).to.throw('решения нет');
    });

    it("когда x ^ 2 - 5 * x = 0 тогда x1 = 0, x2 = 5", function () {
        expect(quadraticEquation(1, -5, 0)).to.deep.equal({x1: 0, x2: 5});
    });

    it("когда 4 * x ^ 2 = 0 тогда x1 = 0", function () {
        expect(quadraticEquation(4, 0, 0)).to.deep.equal({x1: 0});
    });
});
