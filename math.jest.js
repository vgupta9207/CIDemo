//The operatoion returm sum of two numbers

const{addition }=require('./addition');

test('2+3+5',()=>{
    expect(addition(2,3).toBe(5))
})