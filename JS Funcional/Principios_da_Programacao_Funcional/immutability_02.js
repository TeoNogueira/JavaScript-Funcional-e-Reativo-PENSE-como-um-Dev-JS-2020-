const nums = [4, 8, 3, 2, 9, 1, 3, 5];

// #3 - RECURSIVIDADE

function somarArray(array, total = 0) {

if(array.length === 0) {


    return total
}

return somarArray(array.slice(1), total + array[0]);


}

const result = somarArray(nums)

console.log(result)





// - ESTRATÉGIA #2 REDUCE

// const calc = nums.reduce((acc, item) => acc + item, 0)
// console.log(calc)



//X----X-------------------
// - ESTRATÉGIA #1 COM DADOS MUTÁVEIS:

// let total = 0


// for(let i = 0; i < nums.length; i++) {

//     total += nums[i]

// }

// console.log(total)