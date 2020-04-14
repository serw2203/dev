const {expect, assert} = require('chai');
const {sum, sub} = require('../src/index');

describe("Пример тестирования", () => {

    it("Складываем 2 числа: 2 + 3 =  5 (assert)", () => {
        let result = sum(2, 3);
        assert.equal(result, 5);
    });
  
    it("Складываем 2 числа: 2 + 3 =  5 (expect)", () => {
        let result = sum(2, 3);
        expect(result).to.equal(5);
    });

    it("Вычитаем   2 числа: 2 - 3 = -1 (expect)", () => {
        let result = sub(2, 3);
        expect(result).to.equal(-1);
    });
});

describe("Пример тестирования 2", () => {

    it("Складываем 2 числа: 8 + 9 =  17 (assert)", () => {
        let result = sum(8, 9);
        assert.equal(result, 17);
    });
  
    it("Складываем 2 числа: 6 + 7 =  13 (expect)", () => {
        let result = sum(6, 7);
        expect(result).to.equal(13);
    });

    it("Вычитаем   2 числа: 9 - 9 = 0 (expect)", () => {
        let result = sub(9, 9);
        expect(result).to.equal(0);
    });
});