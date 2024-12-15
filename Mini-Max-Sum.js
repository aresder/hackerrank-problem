const arr = [1, 3, 5, 7, 9]
function miniMaxSum(arr) {
    const miniNumbers = arr.filter(ar => ar < Math.max(...arr)).reduce((total, nums) => total + nums, 0)
    const maxNumbers = arr.filter(ar => ar > Math.min(...arr)).reduce((total, nums) => total + nums, 0)

    if (miniNumbers == 0 || maxNumbers == 0) {
        arr.pop()
        console.log(arr.reduce((total, nums) => total + nums, 0), arr.reduce((total, nums) => total + nums, 0))
    } else {
        console.log(miniNumbers, maxNumbers)
    }
}

miniMaxSum(arr)

// function miniMaxSum(arr) {
//     let nums = [];
//     for (let i = 0; i < arr.length; i++) {
//         nums[i] = arr.reduce((total, nums) => total + nums) - arr[i];
//     }
//     console.log(Math.min(...nums), Math.max(...nums));
// }