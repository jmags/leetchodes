const listNode = function(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const addTwoNumbers = function(l1, l2) {
    const val1 = pack(l1);
    const val2 = pack(l2);
    const sum = val1 + val2;
    return unpack(sum);
}

const pack = function(nums) {
    let accumulator = 0;
    let packing = true;
    while (packing) {
        accumulator *= 10;
        accumulator += nums.value;
        if (nums.next === null) {
            packing = false;
        } else {
            nums = nums.next;
        }
    }
    return accumulator;
}

const unpack = function(value) {
    
}
