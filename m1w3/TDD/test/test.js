const barista = require("../barista");
const { expect, assert } = require("chai");
// Test suite
describe('Happy path', ()=>{
    // Test case
    xit("The function returns a proper drink object if all the arguements are filled in", ()=>{
        // invoke our test function
        const result = barista("Kevin", "Large","2%", false, "", false, 4);
        // compare the result using chai
        expect(result).to.be.an("object");
        assert.strictEqual(result.name, "Kevin")
    })

})

describe('Sad path', ()=>{
    xit("Order is missing an espressoShots", ()=>{
        // barista("Ravneet", "Medium","2%", false, "", true, 3)
        const result = barista("Ravneet", "Medium","2%", false, "", true)
        const expectResult = "Arguement espressoShots is missing";
        assert.strictEqual(result, expectResult)
    })
    it("Order is missing an whipcream", ()=>{
        // barista("Ravneet", "Medium","2%", false, "", true, 3)
        const result = barista("Ravneet", "Medium","2%","", true, 3)
        const expectResult = "Arguement whipcream is missing";
        assert.strictEqual(result, expectResult)
    })
})