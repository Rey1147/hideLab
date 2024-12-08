export const task7 = () => {
    const content = document.getElementById('content')
    const button = document.getElementById('getResult')
    const error = `<p class="error">Введите корректные значения</p>`
    const customError = `<p class="error">Точка находится внутри окружности, касательная невозможна</p>`

    const listId = ['coorX1', 'coorY1', 'radius', 'coorX2', 'coorY2']
    const listInputs = {}

    const handleInput = () => {
        document.querySelector('.taskResult')?.remove()
        document.querySelector('.error')?.remove()
        button.classList?.remove('button-none')
    }

    listId.forEach(id => {
        document.getElementById(id).addEventListener('input', handleInput)
    })

    button.addEventListener('click', () => {
        listId.forEach((value, index) => {
            listInputs[index] = parseFloat(document.getElementById(value).value)
        })

        const distance = Math.sqrt(Math.pow(listInputs[0] - listInputs[3], 2) + 
                                   Math.pow(listInputs[1] - listInputs[4], 2))
        
        const tangentLength = (Math.sqrt(Math.pow(distance, 2) - Math.pow(listInputs[2], 2))).toFixed(2)

        if (distance < listInputs[2]) {
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", customError)
            return
        }

        if (isNaN(tangentLength)) {
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", error)
            return
        }

        const result = `<div class="taskResult">
                        <p>Длина касательной: <b/>${tangentLength}</b></p>
                        </div>`
        button.className = 'button-none'
        content.insertAdjacentHTML("beforeend", result)
    })
}