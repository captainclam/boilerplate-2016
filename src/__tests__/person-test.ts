import Person from '../person';

// import 'mocha';
// import {describe, it} from 'mocha';
// import {expect} from 'chai';

describe('Person', () => {
  it('should expect a name in the constructor', () => {
    let p = new Person('simon', new Date(1985, 11, 6))
    expect(p.getName()).toBe('simon')
  })
  it('should return an age', () => {
    let p = new Person('simon', new Date(1985, 11, 6))
    expect(p.getAge()).toBe(31);
  })
})
