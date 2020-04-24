//Binary search implementation solution to hacker rank default problem

findEle = (arr, k) => {
    let sortedArr = arr.slice().sort((a, b) => a - b);
    console.log(sortedArr)
    //binary search
    let min = 0;
    let max = arr.length - 1;
    let midpoint;
    
    while (min <= max) {
        midpoint = Math.floor((min + max) / 2)
        if (sortedArr[midpoint] === k) {
            return "YES"
        } else if (sortedArr[midpoint] < k) {
            min = midpoint + 1
        } else if (sortedArr[midpoint] > k) {
            max = midpoint - 1
        }
    }
    //return string
    return "NO"
}
let d = [1,2,6,7,7,8,9,9,9,7,5,4,41,2,3];
g = 9;
console.log(findEle(d, g));

//sort logic by itself
arrY = [9,45,61,2,3,4,5,6,7];
let x = arrY.sort((a, b) => b-a);
console.log(`THIS: ${x}`);
