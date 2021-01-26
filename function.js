
// if our all variable's works for same, we can follow this rules, here nums is a function parameter and this function working for all of variable.

function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, ': is a even number')
        }else {
        console.log(num*2, ': is odd number')
        }
    } 
}

nums = [5, 12, 89, 45, 18, 8];
evenify_all (nums);

friendsAge = [20, 23, 25, 17, 27, 19];
evenify_all(friendsAge)

friendsHeight = [55, 60, 54, 53, 57, 63];
evenify_all(friendsHeight);