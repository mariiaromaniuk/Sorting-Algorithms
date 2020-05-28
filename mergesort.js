function split(arr){
    const subArraySize = Math.floor(arr.length / 2);

    const leftHalf = arr.slice(0, subArraySize);
    const rightHalf = arr.slice(subArraySize);

    return [leftHalf, rightHalf];
}

function mergeSort(arr){
    // base case
    if (arr.length <= 1){
      return arr;
    }
    // recursive case
    let subArrays = split(arr);
    let left = mergeSort(subArrays[0]);
    let right = mergeSort(subArrays[1]);
    
    return merge(left, right);
}

function merge(left, right){
    let resultArr = [];

    while (left.length && right.length){
        if (left[0] < right[0]) {
            resultArr.push(left[0]);
            left.shift();
        } else {
            resultArr.push(right[0]);
            right.shift();
        }
    }

    if (left.length) 
       resultArr = resultArr.concat(left);
    else 
       resultArr = resultArr.concat(right);

    return resultArr;
}


var arr = [2, 5, 8, 1, 4, 10, 2, 14, 4, 7, 6, -1, 2000, -2000];
console.log(mergeSort(arr));