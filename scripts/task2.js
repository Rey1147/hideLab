export const task2 = () => {
    const content = document.getElementById('content')
    const button = document.getElementById('getSquare')
    const error = `<p class="error">Треугольник не может быть создан</p>`

    const listId = ['CoorX1', 'CoorX2', 'CoorX3', 'CoorY1', 'CoorY2', 'CoorY3']
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

        if (
            (listInputs[0] === listInputs[1] && listInputs[3] === listInputs[4]) || 
            (listInputs[0] === listInputs[2] && listInputs[3] === listInputs[5]) || 
            (listInputs[1] === listInputs[2] && listInputs[4] === listInputs[5])
        ){
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", error)
        } else {
            const square = 0.5 * Math.abs(
                (listInputs[1] - listInputs[0]) * (listInputs[5] - listInputs[3]) -
                (listInputs[2] - listInputs[1]) * (listInputs[4] - listInputs[3])
            )
            
            if (isNaN(square)) {
                button.className = 'button-none'
                content.insertAdjacentHTML("beforeend", error)
                return
            }

            const result = `<div class="taskResult">
                            <p>Площадь треугольника: <b/>${square}</b></p>
                            </div>`
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", result)
        }  
    })
}