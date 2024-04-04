class Person {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  displayAge(): void {
    console.log(`The person's age is ${this.age}.`);
  }
}

// Usage
const person = new Person(30);
person.displayAge();
