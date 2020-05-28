export class Counter {
  value = 0;

  increment(): void {
    this.value++;
  }
}

export const counter = new Counter();
