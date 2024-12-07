const tasks = [
    {
        name: 'Задание №1', 
        content: `<p class="task">Введите информацию о доходах за первый квартал текущего года</p>
            <div class="inputForm">
            <label>Первый месяц:</label>
            <input type="number" id="salaryInput1">
            <label>Второй месяц:</label>
            <input type="number" id="salaryInput2">
            <label>Третий месяц:</label>
            <input type="number" id="salaryInput3">
        </div>
        <button id="getSalary">Рассчитать</button>`
    },
    {
        name: 'Задание №2',
        content: `<p class='task'>Введите координаты (x,y) трёх точек</p>
        <div class='inputForm2'>
            <label>Координаты первой точки:</label>
            <input type="number" id="CoorX1">
            <input type="number" id="CoorY1">
            <label>Координаты второй точки:</label>
            <input type="number" id="CoorX2">
            <input type="number" id="CoorY2">
            <label>Координаты третьей точки:</label>
            <input type="number" id="CoorX3">
            <input type="number" id="CoorY3">
        </div>
        <button id="getSquare">Рассчитать</button>
        `
    },
    {
        name: 'Задание №3',
        content: ``
    },
    {
        name: 'Задание №4',
        content: ``
    },
    {
        name: 'Задание №5',
        content: ``
    },
    {
        name: 'Задание №6',
        content: ``
    },
    {
        name: 'Задание №7',
        content: ``
    },
    {
        name: 'Задание №8',
        content: ``
    },
]


let numTask = 0

const main = (index) => {
    const name = document.getElementById('name')
    const content = document.getElementById('content')
    name.innerHTML = tasks[index].name
    content.innerHTML = tasks[index].content
    taskSwitch(index)
}

const taskSwitch = (index) => {
    switch (index) {
        case 0: task1();
        case 1: task2();
        case 2: '';
        case 3: '';
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


const task1 = () => {
    const content = document.getElementById('content')
    const button = document.getElementById('getSalary')

    document.getElementById('salaryInput1').addEventListener('input', () => {
        document.querySelector('.task1Result')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('salaryInput2').addEventListener('input', () => {
        document.querySelector('.task1Result')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('salaryInput3').addEventListener('input', () => {
        document.querySelector('.task1Result')?.remove()
        button.classList?.remove('button-none')
    })

    button.addEventListener('click', () => {
        const month1 = parseFloat(document.getElementById("salaryInput1").value) || 0
        const month2 = parseFloat(document.getElementById("salaryInput2").value) || 0
        const month3 = parseFloat(document.getElementById("salaryInput3").value) || 0

        const sum = (month1 + month2 + month3).toFixed(2)
        const persent = (sum * 0.13).toFixed(2)
        const withoutPersent = (sum * 0.87).toFixed(2)


        const result = `<div class="task1Result">
                        <p>Общая сумма зарплаты: <b/>${sum}</b></p>
                        <p>Процент от зарплаты: <b>${persent}</b></p>
                        <p>Сумма зарплаты с вычетом процента: <b>${withoutPersent}</b></p>
                        </div>`
        button.className = 'button-none'
        content.insertAdjacentHTML("beforeend", result)
    })
}

const task2 = () => {
    const content = document.getElementById('content')
    const button = document.getElementById('getSquare')

    document.getElementById('CoorX1').addEventListener('input', () => {
        document.querySelector('.task2Result')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('CoorX2').addEventListener('input', () => {
        document.querySelector('.task2Result')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('CoorX3').addEventListener('input', () => {
        document.querySelector('.task2Result')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('CoorY1').addEventListener('input', () => {
        document.querySelector('.task2Result')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('CoorY2').addEventListener('input', () => {
        document.querySelector('.task2Result')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('CoorY3').addEventListener('input', () => {
        document.querySelector('.task2Result')?.remove()
        button.classList?.remove('button-none')
    })

    button.addEventListener('click', () => {
        const x1 = parseFloat(document.getElementById("CoorX1").value) || 0
        const y1 = parseFloat(document.getElementById("CoorY1").value) || 0
        const x2 = parseFloat(document.getElementById("CoorX2").value) || 0
        const y2 = parseFloat(document.getElementById("CoorY2").value) || 0
        const x3 = parseFloat(document.getElementById("CoorX3").value) || 0
        const y3 = parseFloat(document.getElementById("CoorY3").value) || 0

        if ((x1 === x2 && y1 === y2) || (x1 === x3 && y1 === y3) || (x2 === x3 && y2 === y3)) {
            const error = `<p class="error">Треугольник не может быть создан</p>`
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", error)
        } else {
            const square = 0.5*Math.abs((x2-x1)*(y3-y1)-(x3-x1)*(y2-y1))

            const result = `<div class="task2Result">
                            <p>Площадь треугольника: <b/>${square}</b></p>
                            </div>`
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", result)
        }

        
    })        
}

window.onload = main(numTask)
