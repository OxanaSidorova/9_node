const calculateBonus = require('../debug')

describe ("Tests for calculated bonus function",() =>  {
    test ("Test for correct conditions",()=> {
        expect (calculateBonus(20,30) ).toBe(50);
        expect(calculateBonus(20,29)).toEqual(49)
        expect(calculateBonus(20,39)).toEqual(50)
       
    })
    test ("Test for uncorrect conditions",()=> {
        expect (calculateBonus(20,30) ).toBeGreaterThanOrEqual(50);
        expect(calculateBonus(20,29)).toEqual(50)
        expect(calculateBonus(20,39)).toEqual(59)
       
    })

})