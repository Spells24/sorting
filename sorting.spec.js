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
    	expect(bubbleSort([1,4,3,2]).compares).toEqual(9);
    });

    it('Output array has a swaps property that returns how many swaps were used', function(){
    	expect(bubbleSort([1,4,3,2]).swaps).toEqual(3);
    });

});

describe('Merge', function(){
    it('is able to merge two empty arrays', function(){
        expect(merge([],[])).toEqual([]);
    });

    it('is able to merge two sorted arrays', function(){
        expect(merge([1],[2])).toEqual([1,2]);
    });

    it('is able to merge two size n sorted arrays', function(){
        expect(merge([1,3,5],[2])).toEqual([1,2,3,5]);
    });

    it('is able to merge two size n sorted arrays', function(){
        expect(merge([1,60,65],[2,5,70])).toEqual([1,2,5,60,65,70]);
    });

    it('is able to merge two size n sorted arrays', function(){
        expect(merge([2,5,70],[1,60,65])).toEqual([1,2,5,60,65,70]);
    });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    	expect(split([1])).toEqual([[1],[]]);
  });

  it('is able to split an array into two halves', function(){
  		expect(split([1,2,3])).toEqual([[1,2],[3]]); 
  })
  it('is able to split an array into two halves', function(){
  		expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]); 
  })
});


describe('Merge Sort function', function() {
	it('is able to sort an array of length 1', function() {
		expect(mergeSort([1])).toEqual([1]);
	});

	it('is able to sort an array of great even length', function() {
		expect(mergeSort([1,4,2,8,31,20])).toEqual([1,2,4,8,20,31]);
	});

		it('is able to sort an array of great odd length', function() {
		expect(mergeSort([1,8,2,5,3])).toEqual([1,2,3,5,8]);
	});
});







