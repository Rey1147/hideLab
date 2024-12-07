export const task6 = () => {
    const content = document.getElementById('content')
    const button = document.getElementById('getСircle')
    const error = `<p class="error">Введите корректные значения</p>`
    console.log('----');

    document.getElementById('radius').addEventListener('input', () => {
        document.querySelector('.taskResult')?.remove()
        document.querySelector('.error')?.remove()
        button.classList?.remove('button-none')
    })

    button.addEventListener('click', () => {
        const radius = parseFloat(document.getElementById("radius").value)

        const circumference = (2 * Math.PI * radius).toFixed(2)
        const area = (Math.PI * Math.pow(radius, 2)).toFixed(2)

        if (isNaN(circumference)) {
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", error)
            return
        }

        const result = `<div class="taskResult">
                        <p>Длина окружности: <b/>${circumference}</b></p>
                        <p>Площадь круга: <b/>${area}</b></p>
                        </div>`
        button.className = 'button-none'
        content.insertAdjacentHTML("beforeend", result)
    })
}