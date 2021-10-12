import './index.scss'

const arrayEl = document.getElementById('array')
const randomArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));

const array = randomArray(100, 100)

function swap(el1, el2) {
    return new Promise((resolve) => {
        // For exchanging styles of two blocks
        let temp = el1.style.height;
        el1.style.height = el2.style.height;
        el2.style.height = temp;

        // For waiting for .25 sec
        setTimeout(() => {
            resolve()
        }, 250);
    });
}

const generateBlock = (i) => {
    arrayEl.innerHTML = ''

    for (let i = 0; i < array.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')

        block.style.height = `${array[i] * 5}px`

        arrayEl.appendChild(block)
    }
}

const bubbleSort = async () => {
    let blocks = document.querySelectorAll('.block')

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // change background-color of the blocks to be compared
            blocks[j].style.background = 'blue'
            blocks[j + 1].style.background = 'blue  '

            // wait 1s before check for swap
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 500)
            })

            const blockEl1 = Number.parseFloat(blocks[j].style.height)
            const blockEl2 = Number.parseFloat(blocks[j + 1].style.height)

            if (blockEl1 > blockEl2) {
                await swap(blocks[j], blocks[j + 1])
                blocks = document.querySelectorAll(".block");
            }

            // Changing the color to the previous one
            blocks[j].style.background = 'gray'
            blocks[j + 1].style.background = 'gray'

        }
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
}

generateBlock()
bubbleSort()
