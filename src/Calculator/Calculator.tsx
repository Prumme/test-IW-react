export class Calculator {
  private result: number;

  constructor() {
    this.result = 0;
  }

  add(a: number, b: number): void {
    this.result = a + b;
  }

  subtract(a: number, b: number): void {
    this.result = a - b;
  }

  multiply(a: number, b: number): void {
    this.result = a * b;
  }

  divide(a: number, b: number): void {
    this.result = a / b;
  }

  average(numbers: number[]): void {
    if (numbers.length === 0) {
      this.result = 0;
      return;
    }
    this.result = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  }

  getResult(): number {
    return this.result;
  }
}

function CalculatorR() {
  return <div>Calculator</div>;
}

export default CalculatorR;
