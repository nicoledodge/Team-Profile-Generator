const Intern = require("../lib/Intern");

describe("Intern data", () => {
    describe("get Intern role", () => {
        it("should return Intern name", () => {
            const obj = new Intern("Lexi", 16, "lexi@email.com", "UT Austin");
            expect(obj.getRole() === "Intern");
        });
    });
    describe("get Intern school", () => {
        it("should return Intern school", () => {
            const obj = new Intern("Lexi", 16, "lexi@email.com", "UT Austin");
            expect(obj.getSchool() === "UT Austin");
        });
    });
});