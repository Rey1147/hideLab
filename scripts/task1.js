export const task1 = () => {    
    const content = document.getElementById('content')
    const button = document.getElementById('getSalary')
    const error = `<p class="error">Введите корректные данные</p>`

    const listInputs = ['salaryInput1', 'salaryInput2', 'salaryInput3']

    const handleInput = () => {
        document.querySelector('.task1Result')?.remove()
        document.querySelector('.error')?.remove()
        button.classList?.remove('button-none')
    }

    listInputs.forEach(input => {
        document.getElementById(input).addEventListener('input', handleInput)
    })

    button.addEventListener('click', () => {
        const month1 = parseFloat(document.getElementById("salaryInput1").value)
        const month2 = parseFloat(document.getElementById("salaryInput2").value)
        const month3 = parseFloat(document.getElementById("salaryInput3").value)

        const sum = (month1 + month2 + month3).toFixed(2)
        const persent = (sum * 0.13).toFixed(2)
        const withoutPersent = (sum * 0.87).toFixed(2)

        if (isNaN(sum)) {
            button.className = 'button-none'
            content.insertAdjacentHTML("beforeend", error)
            return
        }

        const result = `<div class="task1Result">
                        <p>Общая сумма зарплаты: <b/>${sum}</b></p>
                        <p>Процент от зарплаты: <b>${persent}</b></p>
                        <p>Сумма зарплаты с вычетом процента: <b>${withoutPersent}</b></p>
                        </div>`
        button.className = 'button-none'
        content.insertAdjacentHTML("beforeend", result)
    })
}