function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === 0) {
      right = mid - 1;
    } else if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      return "error";
    }
  }

  return arr.length - left;
}

function sortedFrequency(arr, num) {
  function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let first = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) {
        first = mid;
        right = mid - 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return first;
  }

  function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let last = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) {
        last = mid;
        left = mid + 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return last;
  }

  const first = findFirst(arr, num);
  const last = findLast(arr, num);

  if (first !== -1 && last !== -1) {
    return last - first + 1;
  }

  return -1;
}

function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      return mid;
    }

    if (arr[left] <= arr[mid]) {
      if (num >= arr[left] && num < arr[mid]) {
        end = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (num > arr[mid] && num <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }



  return -1;
}

function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] <= arr[right]) {
      return left;
    }

    let mid = Math.floor((left + right) / 2);
    let next = (mid + 1) % arr.length;
    let prev = (mid - 1 + arr.length) % arr.length;

    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    } else if (arr[mid] <= arr[right]) {
      right = mid - 1;
    } else if (arr[mid] >= arr[left]) {
      left = mid + 1;
    }
  }
}

function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[right] <= x) {
      return arr[right];
    } else if (arr[left > x]) {
      return -1;
    } else if (arr[mid] === x) {
      return x;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}