describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles single arrays', function(){
    	expect(bubbleSort([1])).toEqual([1]);
    });

    it('handles arrays of n numbers', function(){
    	expect(bubbleSort([1,55,21,24,71,64])).toEqual([1,21,24,55,64,71]);
    });

    it('Output array has a compares property that returns how many compares were used', function(){
    	expect(bubbleSort([1,4,3,2]).compares).toEqual(6);
    });

    it('Output array has a swaps property that returns how many swaps were used', function(){
    	expect(bubbleSort([1,4,3,2]).swaps).toEqual(3);
    });

});