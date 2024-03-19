function solution(nums) {
  const hash = new Set(nums);

  return hash.size > nums.length / 2 ? nums.length / 2 : hash.size;
}
