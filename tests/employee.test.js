const Employee = require("../lib/employee");

describe("Employee data", () => {
    describe("get employee name", () => {
        it("should return employee name", () => {
            const obj = new Employee("Tyler", 24, "tyler@email.com");
            expect(obj.getName() === "Tyler");
        });
    });
    describe("get employee id", () => {
        it("should return employee id", () => {
            const obj = new Employee("Tyler", 24, "tyler@email.com");
            expect(obj.getName() === 24);
        });
    });
    describe("get employee email", () => {
        it("should return employee email", () => {
            const obj = new Employee("Tyler", 24, "tyler@email.com");
            expect(obj.getName() === "tyler@email.com");
        });
    });
});
