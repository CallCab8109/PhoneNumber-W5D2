
function createPhoneNumber (arr) {
    arr.splice(0, 0, '(')
    arr.splice(4, 0, ')')
    arr.splice(5, 0, ' ')
    arr.splice(9, 0, '-')
    let newPhone = arr.join('')
    return newPhone
}

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))



// function createPhoneNumber(arr) {
//     let mask = '(xxx) xxx-xxxx'
//     arr.forEach(item => {
//         mask = mask.replace('x', item)
//     })


//     return mask
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))