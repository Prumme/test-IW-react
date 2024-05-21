import { Calculator } from "./Calculator";

test("Calculator add 1 + 2", () => {
  const calculator = new Calculator();
  calculator.add(1, 2);
  expect(calculator.getResult()).toBe(3);
});

test("Calculator add 0 + 0", () => {
  const calculator = new Calculator();
  calculator.add(0, 0);
  expect(calculator.getResult()).toBe(0);
});

test("Calculator add 1+ -1", () => {
  const calculator = new Calculator();
  calculator.add(1, -1);
  expect(calculator.getResult()).toBe(0);
});

test("Calculator subtract 2 - 1", () => {
  const calculator = new Calculator();
  calculator.subtract(2, 1);
  expect(calculator.getResult()).toBe(1);
});

test("Calculator subtract 2 - 0", () => {
  const calculator = new Calculator();
  calculator.subtract(2, 0);
  expect(calculator.getResult()).toBe(2);
});

test("Calculator subtract 2 - -1", () => {
  const calculator = new Calculator();
  calculator.subtract(2, -1);
  expect(calculator.getResult()).toBe(3);
});

test("Calculator multiply 2 * 3", () => {
  const calculator = new Calculator();
  calculator.multiply(2, 3);
  expect(calculator.getResult()).toBe(6);
});

test("Calculator multiply 2 * 0", () => {
  const calculator = new Calculator();
  calculator.multiply(2, 0);
  expect(calculator.getResult()).toBe(0);
});

test("Calculator multiply 2 * -1", () => {
  const calculator = new Calculator();
  calculator.multiply(2, -1);
  expect(calculator.getResult()).toBe(-2);
});

test("Calculator divide 6 / 2", () => {
  const calculator = new Calculator();
  calculator.divide(6, 2);
  expect(calculator.getResult()).toBe(3);
});

test("Calculator divide 6 / 0", () => {
  const calculator = new Calculator();
  calculator.divide(6, 0);
  expect(calculator.getResult()).toBe(Infinity);
});

test("Calculator divide 6 / -2", () => {
  const calculator = new Calculator();
  calculator.divide(6, -2);
  expect(calculator.getResult()).toBe(-3);
});

test("Calculator average [1, 2, 3]", () => {
  const calculator = new Calculator();
  calculator.average([1, 2, 3]);
  expect(calculator.getResult()).toBe(2);
});

test("Calculator average [1, 1, 1]", () => {
  const calculator = new Calculator();
  calculator.average([1, 1, 1]);
  expect(calculator.getResult()).toBe(1);
});

test("Calculator average []", () => {
  const calculator = new Calculator();
  calculator.average([]);
  expect(calculator.getResult()).toBe(0);
});
