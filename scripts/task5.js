export const task5 = () => {
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

        const volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2)
        const surfaceArea = (4 * Math.PI * Math.pow(radius, 2)).toFixed(2)

        if (isNaN(volume)) {
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", error)
            return
        }

        const result = `<div class="taskResult">
                        <p>Объём шара: <b/>${volume}</b></p>
                        <p>Площадь боковой поверхности: <b/>${surfaceArea}</b></p>
                        </div>`
        button.className = 'button-none'
        content.insertAdjacentHTML("beforeend", result)
    })
}