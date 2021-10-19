const Manager = require("../lib/manager");

describe("Manager data", () => {
    describe("get manager role", () => {
        it("should return manager name", () => {
            const obj = new Manager("Nikki", 16, "nikki@email.com", 45);
            expect(obj.getRole() === "Manager");
        });
    });
    describe("get manager office number", () => {
        it("should return manager office number", () => {
            const obj = new Manager("Nikki", 16, "nikki@email.com", 45);
            expect(obj.getOfficeNum() === 45);
        });
    });
});