const twoSum = function(nums, target) {
    const size = nums.length;
    let head = 0;
    let tail = 1;

    while (head < size) {
        const curr = nums[head] + nums[tail];
        if (curr === target) {
            return [head, tail];
        } else {
            if (tail < size - 1) {
                tail += 1;
            } else {
                head += 1;
                tail = head + 1;
            }
        }
    }
}

const nums = [3, 2, 4];
const target = 6;

console.log(twoSum(nums, target));