const help = require ('./helpers');



describe('striker', ()=> {
  it('increments strikes', ()=> {

    const expected = 1;
    const actual = help.striker(0)
     
    expect(actual).toBe(expected)

  })

})

describe( 'score', ()=> {
    it('scores a point on 4 hits', ()=> {
        const expected =1;
        const run = help.score(4)

        expect(run).toBe(expected)
        expect(run).not.toBe(20)

    })
})

describe( 'walk', ()=> {
    it('increments ball amount', ()=> {
        const expected =1;
        const actual = help.walk(0);
        expect(actual).toBe(expected);


        
    })
})