import Person from '../person';


describe('Person', () => {
  it('should be cool', () => {
    let p = new Person('simon')
    expect(p.getName()).toBe('lucy')
  })
})
