const { TestScheduler } = require("jest");
const hitung = require("./day2");
const Hitung = new hitung();

test("Find max from [3, 6, 9] is 9", () => {
    expect(Hitung.getMax([3, 6, 9])).toBe(9);
});

test("Find average from [5, 10, 15 , 20]", () => {
    expect(Hitung.getAvg([5, 10, 15, 20])).toBe(12.5);
});