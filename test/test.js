const {expect, assert} = require('chai');
const {sum, sub} = require('../src/index');

describe("Пример тестирования", () => {

    it("Складываем 2 числа: 2 + 3 = 5 (assert)", () => {
        let result = sum(2, 3);
        assert.equal(result, 5);
    });
  
    it("Складываем 2 числа: 2 + 3 = 5 (expect)", () => {
        let result = sum(2, 3);
        expect(result).to.equal(5);
    });

    it("Вычитаем 2 числа: 2 - 3 = -1 (expect)", () => {
        let result = sub(2, 3);
        expect(result).to.equal(-1);
    });
});