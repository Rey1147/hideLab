export const task8 = () => {
    const content = document.getElementById('content')
    const button = document.getElementById('getResult')
    const error = `<p class="error">Введите корректные значения</p>`
    console.log('----');

    const listId = ['coorX1', 'coorY1', 'coorX2', 'coorY2']
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

        const dx = listInputs[2] - listInputs[0]
        const dy = listInputs[3] - listInputs[1]
    
        const distance = Math.sqrt(dx * dx + dy * dy).toFixed(2)

        if (isNaN(distance)) {
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", error)
            return
        }

        const result = `<div class="taskResult">
                        <p>Расстояние между 2 точками: <b/>${distance}</b></p>
                        </div>`
        button.className = 'button-none'
        content.insertAdjacentHTML("beforeend", result)
    })
}