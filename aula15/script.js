let num =[5, 8, 2, 9, 5]

console.log(num)
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

