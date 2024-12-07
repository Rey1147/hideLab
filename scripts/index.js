import { tasks } from "../data.js"
import { task1 } from "./task1.js"
import { task2 } from "./task2.js"
import { task3 } from "./task3.js"
import { task4 } from "./task4.js"

let numTask = 0

const main = (index) => {
    const name = document.getElementById('name')
    const content = document.getElementById('content')
    name.innerHTML = tasks[index].name
    content.innerHTML = tasks[index].content
    taskSwitch(index)
}
console.log('in script')

const taskSwitch = (index) => {
    switch (index) {
        case 0: 
            task1();
            break;
        case 1: 
            task2();
            break;
        case 2: 
            task3();
            break;
        case 3:
            task4();
            break;
        case 4: '';
        case 5: '';
        case 6: '';
        case 7: '';
    }
}

document.getElementById('left').addEventListener('click', () => {
    if (numTask > 0) {
        numTask--
        main(numTask)
    }
})

document.getElementById('right').addEventListener('click', () => {
    if (numTask < tasks.length - 1) {
        numTask++
        main(numTask)
    }
})

window.onload = main(numTask)