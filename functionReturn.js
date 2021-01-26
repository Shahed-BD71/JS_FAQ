function evenify(num) {
    if (num % 2 == 0) {
       result = num;
    }else {
        result = num*2;
    }
    return result
}

var result = evenify(11);
var square = result*result;
console.log(square);

function evenify_all(nums){
    var evenArray = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num*num);
        evenArray.push(result);
    } 
    return evenArray;
}

nums = [5, 12, 89, 45, 18, 8];
var evenNums = evenify_all (nums);
console.log(evenNums);

// friendsAge = [20, 23, 25, 17, 27, 19];
// evenify_all(friendsAge)

// friendsHeight = [55, 60, 54, 53, 57, 63];
// evenify_all(friendsHeight);