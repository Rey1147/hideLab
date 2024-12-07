export const task2 = () => {
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
