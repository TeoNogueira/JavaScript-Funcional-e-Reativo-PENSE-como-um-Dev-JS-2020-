

function order(array) {

return [...array].sort((a, b) =>  a + b) //[...array] função pura gerando clone
// .sort() altera o valor do array
}


// Object.freeze()

const nums = [3, 1, 7, 9, 4, 6]

// nums[3] = 1000

const numsOrder = order(nums)

 console.log(nums, numsOrder)

 /// SLICE TIRAR PARTE DO ARRAY MESMO ASSIM NÃO ALTERA POIS O ARRAY ESTÁ INTACTO

const parteNums = nums.slice(2)


console.log(parteNums, nums)