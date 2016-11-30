import {reduce} from 'lodash';
// import moment from 'moment';

export default class Person {
  private name:string
  private dob:Date
  constructor(name:string, dob:Date) {
    this.name = name
    this.dob = dob    
  }
  getName() {
    return this.name
  }
  getAge():number {
    let now = new Date()
    let diff = now.valueOf() - this.dob.valueOf()
    return Math.floor(diff / 365 / 24 / 60 / 60 / 1000)
    // return reduce([1, 2, 3, 4, 5], (n, m) => {
    //   return n + m
    // }, 0);
  }
}
