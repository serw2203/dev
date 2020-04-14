const {expect, assert} = require('chai');
const {summa} = require('../src/index');

describe("Пример тестирования", () => {

    it("Складываем 2 числа: 2 + 3 = 5 - assert ---", () => {
        assert.equal(summa(2, 3), 5);
    });
  
    it("Складываем 2 числа: 2 + 3 = 5 - expect ---", () => {
        expect(summa(2, 3)).to.equal(5);
    });
});