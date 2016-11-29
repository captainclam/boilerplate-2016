export default class Person {
  private name:string
  constructor(name) {
    this.name = name
    console.log('My name is', name)
  }
  getName() {
    return this.name;
  }
}
