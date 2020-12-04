import Utils from '../utils/Utils'

/**
 * Test all the operation of the Utils Class
 */
describe('check the operation of 2 numbers', () => {
    it('result addition of 5 + 4 in 9', () => {
        let operation = Utils.addition(5, 4);
        expect(operation).toBeDefined()
        expect(operation).toEqual(9)
    })
    it('result substraction of 5 - 4 in 1', () => {
        let operation = Utils.substraction(5, 4);
        expect(operation).toBeDefined()
        expect(operation).toEqual(1)
    }) 
    it('result multiplication of 5 * 4 in 20', () => {
        let operation = Utils.multiplication(5, 4);
        expect(operation).toBeDefined()
        expect(operation).toEqual(20)
    }) 
    it('result division of 40 / 4 in 10', () => {
        let operation = Utils.division(40, 4);
        expect(operation).toBeDefined()
        expect(operation).toEqual(10)
    })  
})