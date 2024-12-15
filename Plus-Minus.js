const arr = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr) {
    const negativeNumber = (arr.filter((ar) => ar < 0).length / arr.length).toFixed(6)
    const positifNumber = (arr.filter((ar) => ar > 0).length / arr.length).toFixed(6)
    const zeroNumber = (arr.filter((ar) => ar == 0).length / arr.length).toFixed(6)
    console.log(positifNumber)
    console.log(negativeNumber)
    console.log(zeroNumber)
}

plusMinus(arr)