/**
 * 任務：實作一個函式 `sortArray`，將數字陣列由小到大排序。
 *
 * 範例：
 * sortArray([3, 1, 4]) 應該回傳 [1, 3, 4]
 *
 * @param numbers - 一個數字陣列
 * @returns - 回傳一個數字陣列，表示排序後的結果
 */
export function sortArray(numbers: number[]): number[] {
  // 合併演算法

  // step1: 遞迴切分 array 成左右兩部分，直至只剩一個
  if (numbers.length === 1) return numbers;

  const middle = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);
  const sortedLeft = sortArray(left);
  const sortedRight = sortArray(right);
  const result = [];

  let leftIdx = 0;
  let rightIdx = 0;
  let mergeIdx = 0;

  // step2: 左右比較，較小者放入 result ，原 array index + 1，result 的 merge index ＋ 1
  while (leftIdx < sortedLeft.length && rightIdx < sortedRight.length) {
    if (sortedLeft[leftIdx] < sortedRight[rightIdx]) {
      result[mergeIdx] = sortedLeft[leftIdx];
      leftIdx++;
    } else {
      result[mergeIdx] = sortedRight[rightIdx];
      rightIdx++;
    }
    mergeIdx++;
  }

  // 左右尚未比對的，應為偏大數字（所以無法放入），直接接續在 result 後方
  while (leftIdx < sortedLeft.length) {
    result[mergeIdx] = sortedLeft[leftIdx];
    leftIdx++;
    mergeIdx++;
  }

  while (rightIdx < sortedRight.length) {
    result[mergeIdx] = sortedRight[rightIdx];
    rightIdx++;
    mergeIdx++;
  }

  return result;
}

/**
 * 任務：實作一個函式 `filterArray`，過濾數字陣列中符合條件的元素。
 *
 * 範例：
 * filterArray([1, 2, 3, 4], num => num % 2 === 0) 應該回傳 [2, 4]
 *
 * @param numbers - 一個數字陣列
 * @param predicate - 一個函式，用來判斷元素是否符合條件
 * @returns - 回傳一個數字陣列，表示過濾後的結果
 */
export function filterArray(
  numbers: number[],
  predicate: (num: number) => boolean
): number[] {
  const result = numbers.reduce<number[]>((arr, num) => {
    if (predicate(num)) return [...arr, num];
    return arr;
  }, []);

  return result;
}

/**
 * 任務：實作一個函式 `transformArray`，將數字陣列中的每個元素進行轉換。
 *
 * 範例：
 * transformArray([1, 2, 3], num => num * 2) 應該回傳 [2, 4, 6]
 *
 * @param numbers - 一個數字陣列
 * @param transform - 一個函式，用來轉換元素
 * @returns - 回傳一個數字陣列，表示轉換後的結果
 */
export function transformArray(
  numbers: number[],
  transform: (num: number) => number
): number[] {
  const result = numbers.map((num) => transform(num));
  return result;
}
