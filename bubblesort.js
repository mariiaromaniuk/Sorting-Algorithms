function bubbleSort(arr){
    for (let i = 0 ; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                swap(i, j, arr);
        }
    }
    return arr;
}

function swap(i, j, arr){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


var arr = [2, 5, 8, 1, 4, 10, 2, 14, 4, 7, 6, -1, 100, -100];
console.log(bubbleSort(arr));