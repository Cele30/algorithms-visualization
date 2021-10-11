const array = [5, 1, 4, 2, 6, 3]
console.log(array)

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')

const swap = (i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
let a = 0;

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        (function (i) {
            setTimeout(function () {
                (function (j) {
                    setTimeout(() => {
                        // console.log(array)
                        if (i !== a) {
                            console.log('od pocetok sega pak')
                            a = i
                        }

                        console.log(array[j], i)
                        console.log(array[j + 1])


                        if (array[j] > array[j + 1]) {
                            console.log(`change prev ${array[j]} with next ${array[j + 1]}`)
                            swap(j, j + 1)
                        }
                    }, j * 2000);
                })(j)
            }, 6000 * i);
        })(i);
    }
}

// console.log(array)

// for (var i = 0; i < 5; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log('value is ', i);
//         }, 3000 * (i + 1));
//     })(i);
// }