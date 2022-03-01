// const { expect } = require('@jest/globals');
// const { test } = require('picomatch');
const{division}=require('./division');
test.each([[4,4,0],[8,2,0],[6,2,0]])(
    'a % b = c',(a,b,expected)=>{
        expect(division(a,b)).toBe(expected);
    }

)
