export const task3 = () => {
    const content = document.getElementById('content')
    const button = document.getElementById('getСoordinate')
    const error = `<p class="error">Введите корректные координаты</p>`
    console.log('-------------');
    

    document.getElementById('x').addEventListener('input', () => {
        document.querySelector('.taskResult')?.remove()
        document.querySelector('.error')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('y').addEventListener('input', () => {
        document.querySelector('.taskResult')?.remove()
        document.querySelector('.error')?.remove()
        button.classList?.remove('button-none')
    })

    button.addEventListener('click', () => {
        const x = parseFloat(document.getElementById("x").value)
        const y = parseFloat(document.getElementById("y").value)

        const coor = Math.sqrt(x * x + y * y).toFixed(2)

        if (isNaN(coor)) {
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", error)
            return
        }

        const result = `<div class="taskResult">
                        <p>Расстояние до нулевой координаты: <b/>${coor}</b></p>
                        </div>`
        button.className = 'button-none'
        content.insertAdjacentHTML("beforeend", result)
    })
}