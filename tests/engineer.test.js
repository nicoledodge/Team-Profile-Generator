const Engineer = require("../lib/engineer");

describe("Engineer data", () => {
    describe("get employee role", () => {
        it("should return engineer name", () => {
            const obj = new Engineer("Tyler", 24, "tyler@email.com");
            expect(obj.getRole() === "Engineer");
        });
    });
});