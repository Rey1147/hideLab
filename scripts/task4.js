export const task4 = () => {
    const content = document.getElementById('content')
    const button = document.getElementById('getVariable')
    const error = `<p class="error">Введите корректные значения</p>`
    console.log('----');

    document.getElementById('varA').addEventListener('input', () => {
        document.querySelector('.taskResult')?.remove()
        document.querySelector('.error')?.remove()
        button.classList?.remove('button-none')
    })
    document.getElementById('varB').addEventListener('input', () => {
        document.querySelector('.taskResult')?.remove()
        document.querySelector('.error')?.remove()
        button.classList?.remove('button-none')
    })

    button.addEventListener('click', () => {
        let a = parseFloat(document.getElementById("varA").value)
        let b = parseFloat(document.getElementById("varB").value)

        a += b
        b = a - b
        a -= b

        if (isNaN(a) || isNaN(b)) {
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", error)
            return
        }

        const result = `<div class="taskResult">
                        <p>Значение первой переменной a: <b/>${a}</b></p>
                        <p>Значение второй переменной b: <b/>${b}</b></p>
                        </div>`
        button.className = 'button-none'
        content.insertAdjacentHTML("beforeend", result)
    })
}