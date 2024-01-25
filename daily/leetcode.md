## 最长公共前缀

**leetcode14**:  编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

输入：strs = ["flower","flow","flight"]

 输出："fl"

```javascript
function getLongtestStr(strs){
    let index = 0;
    while(strs.every(item => index < item.length && item[index] === strs[0][index])){
        index++;
    }
    return strs[0].slice(0, index);
}

const strs = ["flower","flow","flight"];
console.log(getLongtestStr(strs));r(strs));
```

## 有效括号

**leetcode20:** 给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

输入：s = "()[]{}"
输出：true

```javascript
function isValid(str){
    let stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    if(str.length % 2 !== 0) return false;
    for(let char of str){
        if(char in map){
            stack.push(char);
        }else{
            const top = stack.pop();
            if(map[top] !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid('(){}[]{[()]}'))
```

## 两数和

**leetcode1**: 给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`*  的那 **两个** 整数，并返回它们的数组下标。

```javascript
let nums = [3,3], target = 6;

// 入门写法
function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        const rest = target-nums[i];
        let restIndex = nums.indexOf(rest);
        if(restIndex > -1 && restIndex !== i){
            return [i, restIndex]
        }
    }
    return []
}

// 进阶写法
const twoSum = (nums, target) => {
    const prevNums = {};                    // 存储出现过的数字，和对应的索引               
    for (let i = 0; i < nums.length; i++) {       // 遍历元素   
      const curNum = nums[i];                     // 当前元素   
      const targetNum = target - curNum;          // 满足要求的目标元素   
      const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
      if (targetNumIndex !== undefined) {         // 如果存在，直接返回 [目标元素的索引,当前索引]
        return [targetNumIndex, i];
      } else {                                    // 如果不存在，说明之前没出现过目标元素
        prevNums[curNum] = i;                     // 存入当前的元素和对应的索引
      }
    }
  }

console.log(twoSum(nums,target))nums,target))
```

## 原地删除有序数组重复项

**leetcode26**:原地删除有序数组中的重复项

```javascript
const removeDuplicates = function(nums) {
    let fast = 0, slow = 0;
    while(fast < nums.length - 1){
        if(nums[fast] !== nums[fast + 1]){
            slow++;
            nums[slow] = nums[fast+1];
        }
        fast++;
    }
    return slow;
};
// 双指针， 快慢指针法 时间复杂度O(n)， 空间复杂度O(1)
```

## 原地删除val

**leetcode27**:给你一个数组 `nums` 和一个值 `val`，你需要 **[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)** 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

```javascript
// 双指针
const removeElement = function(nums, val) {
    let left = 0, right = nums.length;
    while(left < right){
        if (nums[left] === val) {
            nums[left] = nums[right-1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};
```

## 加一

**leetcode66**: 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

```javascript
var plusOne = function(digits) {
    let arr = [0, ...digits];
    for(let i=arr.length - 1; i >=0; i--){
        if(arr[i] + 1 === 10){
            arr[i] = 0;
        }else{
            arr[i] = arr[i] + 1;
            break;
        }
    }
    return arr[0] === 0 ? arr.slice(1) : arr;
};
```

## 爬楼梯

**leetcode70**: 假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。

每次你可以爬 `1` 或 `2` 个台阶。你有多少种不同的方法可以爬到楼顶呢？

```javascript
const climbStairs = function(n) {
    // dp[i] 为第 i 阶楼梯有多少种方法爬到楼顶
    // dp[i] = dp[i - 1] + dp[i - 2]
    let dp = [1 , 2]
    for(let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n - 1]
};
// 最后可能是一步，也有可能是两步。
```

## 合并两个有序数组

**leetcode88**: 合并两个有序数组

```javascript
function combineTwoArr(nums1, nums2){
    let result = [];
    let s1 = 0, s2 = 0;
    while(s1 < nums1.length && s2 < nums2.length){
        if(nums1[s1] > nums2[s2]){
            result.push(nums2[s2]);
            s2++;
        }else{
            result.push(nums1[s1]);
            s1++;
        }
    }
    while(s1 < nums1.length){
        result.push(nums1[s1]);
        s1++;
    }
    while(s2 < nums2.length){
        result.push(nums2[s2]);
        s2++;
    }
    return result;
}

const nums1 = [1,2,5,6,9];
const nums2 = [3,4,7,8];

console.log(combineTwoArr(nums1, nums2));
```

## 买卖股票最佳时机

**leetcode 121**: 买卖股票的最佳时机

```javascript
let arr = [7,6,4,3,1,9];

let maxProfit = function(prices) {
    let max = 0, minprice = prices[0]
    for(let i = 1; i < prices.length; i++) {
        minprice = Math.min(prices[i], minprice)
        max = Math.max(max, prices[i] - minprice)
    }
    return max
}

console.log(maxProfit(arr));
```

## 验证回文串

**leetcode 125**: 验证回文串

如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

字母和数字都属于字母数字字符。

给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

```javascript
function isPalindrome(str){
    let s = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return s.split('').reverse().join('') === s;
}

let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))
```

## 多数元素

**leetcode 169**: 多数元素

给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

```javascript
function majorityElement(nums){
    const halfLen = nums.length/2;
    let res = nums[0];
    let map = {};
    for(let n of nums){
        if(n in map){
            map[n] = map[n]+1;
            if(map[n] > halfLen){
                res = n;
            }
        }else{
            map[n] = 1;
        }
    }
    return res;
}

let nums = [2,2,1,1,1,2,2];
//进阶写法
//如果元素出现次数大于数组长度的一半，那最中间的那个元素一定是出现次数最多的元素
let  majorityElement2 = function(nums) {
    nums.sort((a,b)=>a-b)
    return nums[Math.floor(nums.length/2)]
};

console.log(majorityElement(nums));
```

## 快乐数

**LeetCode202**： 快乐数

```javascript
let isHappy = function(n) {
    const map = {};
    while( n != 1){
        if(map[n]){
            return false
        }
        map[n] = true
        n = String(n).split("").map(item => item**2).reduce((acc,cur)=> acc+cur)
    }
    return true
};
```

## 同构字符串

**leetcode 205**

```javascript
let s = "paper", t = "title";

const isIsomorphic = (s, t) => {
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
    }
    return true;
}

console.log(isIsomorphic(s,t))
```

## 各位相加

**LeetCode 258**： 给定一个非负整数 `num`，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。

```javascript
const addDigits = (num) => {
    const getNext = (n) => String(n).split('').reduce((a, b) => Number(a) + Number(b));
    let res = num;
    while(res >= 10){
        res = getNext(res);
    }
    return res;
}

console.log(addDigits(38));
```

## 丑数

**LeetCode263**： **丑数** 就是只包含质因数 `2`、`3` 和 `5` 的正整数。

```javascript
var isUgly = function(num) {
   if(num <= 0) return false
   while(num%2===0){
        num = num/2;
   }
   while(num%3===0){
        num = num/3;
   }
   while(num%5===0){
       num = num/5;
   }
   return num === 1
};
```

## 移动零

**LeetCode283**： 给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**请注意** ，必须在不复制数组的情况下原地对数组进行操作。

```javascript
function moveZeroes(nums){
    let slow = 0, fast = 0;
    while(fast < nums.length){
        if(nums[fast] !== 0 && nums[slow] === 0){
            nums[slow] = nums[fast];
            nums[fast] = 0;
            slow++;
        }
        if(nums[fast] !== 0 && nums[slow] !== 0){
            slow++;
        }
        fast++;
    }
}

moveZeroes([1,0])
```

## 单词规律

**LeetCode290**： 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。

```javascript
var wordPattern = function(pattern, s) {
    let pChar = [...new Set(pattern.split(''))];
    let sChar = [...new Set(s.split(' '))];
    let map = {};
    for(let i = 0; i < pChar.length; i++){
        map[pChar[i]] = sChar[i];
    }
    let newS = pattern.split('').map(item => map[item]).join(' ');
    return newS === s;
};
let pattern = "abba", s = "dog cat cat dog"
console.log(wordPattern(pattern, s))
```

## Nim游戏

**leetcode 292**:

你和你的朋友，两个人一起玩 Nim 游戏：

桌子上有一堆石头。
你们轮流进行自己的回合， 你作为先手 。
每一回合，轮到的人拿掉 1 - 3 块石头。
拿掉最后一块石头的人就是获胜者。
假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false 。

```javascript
var canWinNim = function(n) {
    return n % 4 !== 0;
};
```
