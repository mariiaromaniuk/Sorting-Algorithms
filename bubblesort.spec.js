describe('Bubble Sort', function(){
    
    it('handles and empty array', function(){
        expect( bubbleSort([])).toEqual( [] )
    });

    it('handles an array with one element', function(){
        expect(bubbleSort([2])).toEqual( [2] )
    });

    it('sorts an array with multiple elements', function(){
        expect(bubbleSort([2, 5, 1, 77, 34])).toEqual([1, 2, 5, 34, 77])
    });
    
    it('sorts an array with duplicate elements', function(){
        expect(bubbleSort(arr)).toEqual(arr.slice().sort((a, b) => a < b))
    })
})