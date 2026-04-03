// Linear Search
export function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Bubble Sort
export function bubbleSort(arr) {
  let sorted = [...arr];

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  return sorted;
}

// Basic Data Structure (Array operations)
export function arrayOperations() {
  let arr = [5, 3, 8];

  arr.push(10);     // add
  arr.pop();        // remove last
  arr.unshift(1);   // add to start
  arr.shift();      // remove first

  return arr;
}