const twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return console.log(result);
};

/*
    For example:
    twoSum([2, 7, 11, 15], 9); 
    Should returns:
    [0, 1] 
    Because:
    nums[0]+nums[1] is 9
    */

twoSum([2, 7, 11, 15], 9);
